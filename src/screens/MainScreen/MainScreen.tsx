import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Screen from '../../components/Screen';
import Bottom from '../../components/Bottom';
import { useEffect, useRef, useState } from 'react';
import useMainScroll from '../../hooks/useMainScroll';
import MusicListLarge from '../../components/musiclist/MusicListLarge';
import MusicListMedium from '../../components/musiclist/MusicListMedium';
import MusicListSmall from '../../components/musiclist/MusicListSmall';
import Playlist from '../../components/playlist/Playlist';
import { get_song, get_songfile } from '../../api';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import { songs } from '../../dummy';
import { useRecoilState } from 'recoil';
import { trackInfoState } from '../../atoms';

export interface ISongData {
  url: string;
  title: string;
  artist?: string;
  album?: string;
  genre?: string;
  date?: Date;
  artwork?: string;
  duration?: number;
  id?: number;
}

const togglePlayBack = async (playBackState: any) => {
  const currentTrack = await TrackPlayer.getActiveTrackIndex();
  if (playBackState.state == State.Paused) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
  }
};

export default function MainScreen() {
  const playBackState = usePlaybackState();
  const progress = useProgress();

  const [trackInfo, setTrackInfo] = useRecoilState(trackInfoState);

  const playlistAnimation = useRef(new Animated.Value(0)).current;
  const {
    onScrollBeginDrag,
    onScroll,
    onScrollEndDrag,
    headerAnimation,
    headerBackgroundAnimation,
  } = useMainScroll();

  const data1 = [
    [songs[0], songs[1], songs[2], songs[3]],
    [songs[4], songs[5], songs[6], songs[7]],
  ];
  const data2 = [songs[8], songs[9], songs[10], songs[11], songs[12]];

  const handleSongSelect = async (song: ISongData) => {
    try {
      if (song.id) {
        setTrackInfo(song);
        await TrackPlayer.skip(song.id);
        await TrackPlayer.play();
      }
    } catch (err) {
      console.error('error : ', err);
    }
  };

  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
        });
        await TrackPlayer.add(songs);
      } catch (error) {
        throw error;
      }
    };

    setupPlayer();
  }, []);

  return (
    <Screen title="메인" headerAnimation={headerAnimation}>
      <ScrollView
        scrollEventThrottle={1}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        onScroll={onScroll}>
        <View style={{ marginBottom: 100 }}>
          <MusicListSmall data={data1} onSongSelect={handleSongSelect} />
          <MusicListMedium data={data2} onSongSelect={handleSongSelect} />
        </View>
      </ScrollView>
      <Playlist playlistAnimation={playlistAnimation} />
      <Bottom playlistAnimation={playlistAnimation} />
    </Screen>
  );
}
