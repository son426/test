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
  const [likeStatus, setLikeStatus] = useState<boolean | null>(null);

  const mockApiCall = async () => {
    console.log('좋아요 api');
  };

  const handleLike = async () => {
    await mockApiCall();
    setLikeStatus(likeStatus === true ? null : true);
  };

  const handleDislike = async () => {
    await mockApiCall();
    setLikeStatus(likeStatus === false ? null : false);
  };

  return (
    <View
      style={{
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={handleDislike}>
        <Icon
          name="thumb-down"
          color={likeStatus === false ? 'red' : 'white'}
          size={18}
        />
      </TouchableOpacity>
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
      <TouchableOpacity onPress={handleLike}>
        <Icon
          name="thumb-up"
          color={likeStatus === true ? 'green' : 'white'}
          size={18}
        />
      </TouchableOpacity>
    </View>
  );
}
