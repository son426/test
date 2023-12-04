import { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  PanResponder,
  Dimensions,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import PlaylistMini from './PlaylistMini';

import PlaylistFullBottom from './playlistFull/PlaylistFullBottom';
import PlaylistFullMiddle from './playlistFull/PlaylistFullMiddle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  State,
  Event,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import PlaylistFullMiddle2 from './playlistFull/PlaylistFullMiddle2';
import { songs } from '../../dummy';
import { useRecoilState } from 'recoil';
import { trackInfoState } from '../../atoms';
import { ISongData } from '../../screens/MainScreen/MainScreen';

const { width, height } = Dimensions.get('window');

const togglePlayBack = async (playBackState: any) => {
  const currentTrack = await TrackPlayer.getActiveTrackIndex();
  if (playBackState.state == State.Paused) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
  }
};

interface PlaylistProps {
  playlistAnimation: Animated.Value;
}

export interface ITrackInfo {
  title: string;
  artist: string;
  genre: string;
  url?: string;
  artwork?: { uri: string };
}

export default function Playlist({ playlistAnimation }: PlaylistProps) {
  const playlistRef = useRef('mini'); //mini, full
  const songSlider = useRef(null); // flatlist ref
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const scrollX = useRef(new Animated.Value(0)).current;

  const [currentTrackInfo, setCurrentTrackInfo] =
    useRecoilState(trackInfoState);

  const updateCurrentTrackInfo = async () => {
    const currentTrackId = await TrackPlayer.getActiveTrackIndex();
    if (currentTrackId) {
      const track = await TrackPlayer.getTrack(currentTrackId);

      if (
        track &&
        track.title &&
        track.genre &&
        track.artist &&
        track.url &&
        track.artwork &&
        track.id
      ) {
        console.log(track.artwork);
        setCurrentTrackInfo({
          id: track.id,
          title: track.title,
          artist: track.artist,
          genre: track.genre, // 만약 genre 정보가 없다면 이 줄은 제거
          url: track.url,
          artwork: { uri: track.artwork },
        });
      }
    }
  };

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
    await updateCurrentTrackInfo();
  };

  const skipToPrev = async () => {
    await TrackPlayer.skipToPrevious();
    await updateCurrentTrackInfo();
  };

  interface IRenderSongs {
    item: ISongData;
    index: number;
  }

  const renderSongs = ({ item, index }: IRenderSongs) => {
    return (
      <Animated.View
        style={{
          width: playlistAnimation.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [0, width * 0.8, width],
          }),
          height: playlistAnimation.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [0, width * 0.8, width * 0.8],
          }),
        }}>
        <Image
          source={item.artwork}
          style={{ width: '100%', height: '100%' }}
        />
      </Animated.View>
    );
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { dx, dy } = gestureState;

        // verticcal scroll
        if (playlistRef.current === 'mini') {
          playlistAnimation.setValue(-dy);
        }
        if (playlistRef.current === 'full') {
          playlistAnimation.setValue(height - dy);
        }
      },
      onPanResponderEnd: (event, gestureState) => {
        const { dx, dy } = gestureState;

        // vertical scroll
        if (dy <= -100 && playlistRef.current === 'mini') {
          Animated.spring(playlistAnimation, {
            toValue: height,
            useNativeDriver: false,
          }).start();
          playlistRef.current = 'full';
        }

        if (-100 < dy && playlistRef.current === 'mini') {
          Animated.spring(playlistAnimation, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }

        if (100 <= dy && playlistRef.current == 'full') {
          Animated.spring(playlistAnimation, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
          playlistRef.current = 'mini';
        }

        if (dy < 100 && playlistRef.current == 'full') {
          Animated.spring(playlistAnimation, {
            toValue: height,
            useNativeDriver: false,
          }).start();
        }

        // horizontal scroll
        const horizontalThreshold = 50;
        if (Math.abs(dx) > horizontalThreshold) {
          // changeSong(dx);
        }
        if (Math.abs(dx) < horizontalThreshold) {
        }
      },
    }),
  ).current;

  const handlePressMini = () => {
    Animated.spring(playlistAnimation, {
      toValue: height,
      useNativeDriver: false,
    }).start();
    playlistRef.current = 'full';
  };

  useEffect(() => {
    const listener = playlistAnimation.addListener(({ value }) => {
      if (value > 50 && songSlider.current) {
        songSlider.current.scrollToOffset({
          offset: currentTrackInfo.id * width,
          animated: false,
        });
      }
    });

    return () => {
      playlistAnimation.removeListener(listener);
    };
  }, [playlistAnimation, currentTrackInfo.id]);

  // currentTrackInfo.id 값에 따른 스크롤 위치 업데이트
  useEffect(() => {
    if (songSlider.current) {
      songSlider.current.scrollToOffset({
        offset: currentTrackInfo.id * width,
        animated: true,
      });
    }
  }, [currentTrackInfo.id]);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        backgroundColor: '#222',
        marginTop: playlistAnimation.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, -200, -200],
        }),
        height: playlistAnimation.interpolate({
          inputRange: [0, 100],
          outputRange: [60, 160],
        }),
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {/* image */}
      <View>
        <Animated.View
          style={{
            width: playlistAnimation.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: ['0%', '80%', '100%'],
            }),
            height: playlistAnimation.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: [0, width * 0.8, width * 0.8],
            }),
            marginTop: playlistAnimation.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: [0, 0, -100],
            }),
            opacity: playlistAnimation.interpolate({
              inputRange: [0, height / 1.5, height],
              outputRange: [0, 0, 1],
            }),
          }}>
          <FlatList
            ref={songSlider}
            renderItem={renderSongs}
            data={songs}
            keyExtractor={item => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            initialNumToRender={5}
            windowSize={5}
          />
        </Animated.View>
        <PlaylistFullMiddle
          playlistAnimation={playlistAnimation}
          currentTrackInfo={currentTrackInfo}
        />
        <PlaylistFullMiddle2 playlistAnimation={playlistAnimation} />
        {/* timeline */}
        <Animated.View
          style={{
            opacity: playlistAnimation.interpolate({
              inputRange: [height / 2, height],
              outputRange: [0, 1],
            }),
            width: playlistAnimation.interpolate({
              inputRange: [0, height / 2.5, height],
              outputRange: [0, 0, width * 0.8],
            }),
            height: playlistAnimation.interpolate({
              inputRange: [0, height / 2.5, height],
              outputRange: [0, 0, 50],
            }),
            marginLeft: playlistAnimation.interpolate({
              inputRange: [0, height / 2.5, height],
              outputRange: [0, 0, width * 0.1],
            }),
          }}>
          <Slider
            style={{
              width: '100%',
              height: 10,
              flexDirection: 'row',
            }}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#ffd369"
            minimumTrackTintColor="#ffd369"
            maximumTrackTintColor="#ffffff60"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 6,
            }}>
            <Text style={{ color: 'white', fontSize: 10 }}>
              {new Date(progress.position * 1000)
                .toLocaleTimeString()
                .slice(2, 8)}
            </Text>
            <Text style={{ color: 'white', fontSize: 10 }}>
              {new Date((progress.duration - progress.position) * 1000)
                .toLocaleTimeString()
                .slice(2, 8)}
            </Text>
          </View>
        </Animated.View>
        {/* buttons */}
        <Animated.View
          style={{
            height: playlistAnimation.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: [0, 0, 50],
            }),
            opacity: playlistAnimation.interpolate({
              inputRange: [height / 2, height],
              outputRange: [0, 1],
            }),
            width: playlistAnimation.interpolate({
              inputRange: [0, height / 2.5, height],
              outputRange: [0, 0, width * 0.8],
            }),
            marginLeft: playlistAnimation.interpolate({
              inputRange: [0, height / 2.5, height],
              outputRange: [0, 0, width * 0.1],
            }),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={skipToPrev}>
            <Icon name="shuffle" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              skipToPrev();
            }}>
            <Icon name="skip-previous" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
            <View
              style={{
                backgroundColor: '#ffffff20',
                padding: 14,
                borderRadius: 100,
              }}>
              {playBackState.state === State.Playing ? (
                <Icon name="pause" size={24} color="white" />
              ) : (
                <Icon name="play" size={24} color="white" />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNext}>
            <Icon name="skip-next" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="menu" size={24} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
      {/* mini */}
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={handlePressMini}
        activeOpacity={0.9}>
        <Animated.View
          style={{
            flex: 1,
            opacity: playlistAnimation.interpolate({
              inputRange: [0, height / 2],
              outputRange: [1, 0],
            }),
            width: playlistAnimation.interpolate({
              inputRange: [0, height / 2],
              outputRange: ['100%', '0%'],
            }),
            height: playlistAnimation.interpolate({
              inputRange: [0, height / 2],
              outputRange: ['100%', '0%'],
            }),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={currentTrackInfo.artwork}
            style={{
              width: 50,
              height: 50,
              // borderWidth: 1,
              // borderColor: 'pink',
            }}
          />
          <PlaylistMini
            genre={currentTrackInfo.genre}
            songName={currentTrackInfo.title}
            skipToNext={skipToNext}
          />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
}
