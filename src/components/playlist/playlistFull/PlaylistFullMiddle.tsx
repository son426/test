import Slider from '@react-native-community/slider';
import { useState } from 'react';
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, {
  State,
  Event,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ITrackInfo } from '../Playlist';

const { width, height } = Dimensions.get('window');

interface PlaylistFullMiddleProps {
  playlistAnimation: Animated.Value;
  currentTrackInfo: ITrackInfo;
}

export default function PlaylistFullMiddle({
  playlistAnimation,
  currentTrackInfo,
}: PlaylistFullMiddleProps) {
  return (
    <Animated.View
      style={{
        height: playlistAnimation.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, 0, 100],
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
      }}>
      <MiddleTitle
        songName={currentTrackInfo.title}
        genre={currentTrackInfo.genre}
      />
    </Animated.View>
  );
}

interface MiddleTitleProps {
  songName: string;
  genre: string;
}

function MiddleTitle({ songName, genre }: MiddleTitleProps) {
  return (
    <View
      style={{
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Icon name="thumb-down" color={'white'} size={18} />
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 20 }}>
        <Text
          numberOfLines={1}
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {songName}
        </Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{genre}</Text>
      </View>
      <Icon name="thumb-up" color={'white'} size={18} />
    </View>
  );
}
