import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  State,
  Event,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';

interface PlaylistMiniProps {
  genre: string;
  songName: string;
  skipToNext: () => void;
}

const togglePlayBack = async (playBackState: any) => {
  const currentTrack = await TrackPlayer.getActiveTrackIndex();
  if (playBackState.state == State.Paused) {
    await TrackPlayer.play();
  } else {
    await TrackPlayer.pause();
  }
};

export default function PlaylistMini({
  genre,
  songName,
  skipToNext,
}: PlaylistMiniProps) {
  const playBackState = usePlaybackState();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'red',
      }}>
      <View
        style={{
          marginLeft: 14,
          width: '60%',
        }}>
        <Text style={{ color: '#999' }}>{genre}</Text>
        <Text style={{ color: 'white' }} numberOfLines={1}>
          {songName}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed!!');
            togglePlayBack(playBackState);
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {playBackState.state === State.Playing ? (
              <Icon name="pause" size={24} color="white" />
            ) : (
              <Icon name="play" size={24} color="white" />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed!!');
            skipToNext();
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="skip-next" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
