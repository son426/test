import Slider from '@react-native-community/slider';
import { useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
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

const { width, height } = Dimensions.get('window');

interface PlaylistFullMiddleProps {
  playlistAnimation: Animated.Value;
}

export default function PlaylistFullMiddle2({
  playlistAnimation,
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
      <ScrollView scrollEventThrottle={1}>
        <View>
          <Text>
            {/* 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 */}
          </Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
}
