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
import { songs1_1, songs1_2, songs2_1 } from '../../dummy';
import { useRecoilState } from 'recoil';
import { TrackInfo, trackInfoState } from '../../atoms';
import useTrackPlayer from '../../hooks/useTrackPlayer';

export interface ISongData {
  url?: string;
  title: string;
  artist?: string;
  album?: string;
  genre?: string;
  date?: Date;
  artwork?: string;
  duration?: number;
  id: string;
}

export default function MainScreen() {
  const [trackInfo, setTrackInfo] = useRecoilState(trackInfoState);
  const playlistAnimation = useRef(new Animated.Value(0)).current;
  const {
    onScrollBeginDrag,
    onScroll,
    onScrollEndDrag,
    headerAnimation,
    headerBackgroundAnimation,
  } = useMainScroll();
  const {
    addTracks,
    playTrack,
    skipTrack,
    findTrackIndexById,
    updateTrackInfo,
  } = useTrackPlayer();

  const data1 = songs1_1;
  const data2 = songs2_1;

  const handleSongSelect = async (song: ISongData) => {
    try {
      updateTrackInfo(song.id);

      const songsData = songs1_2;
      const nowSong = songsData.filter(eachSong => eachSong.id === song.id)[0];
      await addTracks(nowSong);

      const nowIndex = await findTrackIndexById(song.id);
      await skipTrack(nowIndex);
      await playTrack();
    } catch (err) {
      console.error(' handleSongSelect error : ', err);
    }
  };

  return (
    <Screen title="메인" headerAnimation={headerAnimation}>
      <ScrollView
        scrollEventThrottle={1}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        onScroll={onScroll}>
        <View style={{ marginBottom: 20 }}>
          <MusicListSmall data={data1} onSongSelect={handleSongSelect} />
          <MusicListMedium data={data2} onSongSelect={handleSongSelect} />
        </View>
      </ScrollView>
      <Playlist playlistAnimation={playlistAnimation} />
      <Bottom playlistAnimation={playlistAnimation} />
    </Screen>
  );
}
