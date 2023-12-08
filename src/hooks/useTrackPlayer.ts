import { useState } from 'react';
import TrackPlayer, { Capability } from 'react-native-track-player';
import { useRecoilState } from 'recoil';
import { TrackInfo, trackInfoState } from '../atoms';
import { songs1_1 } from '../dummy';

const useTrackPlayer = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [currentTrack, setCurrentTrack] =
    useRecoilState<TrackInfo>(trackInfoState);

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
      setIsPlayerReady(true);
    } catch (error) {
      console.error('setupPlayer Error:', error);
    }
  };

  interface ITrackInfo {
    url: string;
    id: string;
  }

  const updateTrackInfo = (songId: string) => {
    const songsData = songs1_1;
    const songData = songsData.find(song => song.id === songId);

    if (songData) {
      const trackInfo = {
        id: songData.id,
        title: songData.title ?? '',
        artist: songData.artist,
        genre: songData.genre,
        artwork: songData.artwork,
        url: '',
      };

      // Recoil state 업데이트
      setCurrentTrack(trackInfo);
    }
  };

  interface ITrack {
    id: string;
    url: any;
  }

  const addTracks = async (track: ITrack) => {
    try {
      await TrackPlayer.add(track);
    } catch (error) {
      console.error('addTracks Error:', error);
    }
  };

  const findTrackIndexById = async (trackId: string) => {
    const queue = await TrackPlayer.getQueue();
    return queue.findIndex(track => track.id === trackId);
  };

  const skipTrack = async (trackIndex: number) => {
    try {
      await TrackPlayer.skip(trackIndex);
    } catch (error) {
      console.error('skipTrack Error:', error);
    }
  };

  const playTrack = async () => {
    try {
      await TrackPlayer.play();
    } catch (error) {
      console.error('playTrack Error:', error);
    }
  };

  const pauseTrack = async () => {
    try {
      await TrackPlayer.pause();
    } catch (error) {
      console.error('pauseTrack Error:', error);
    }
  };

  return {
    isPlayerReady,
    setupPlayer,
    addTracks,
    playTrack,
    skipTrack,
    pauseTrack,
    updateTrackInfo,
    findTrackIndexById,
  };
};

export default useTrackPlayer;
