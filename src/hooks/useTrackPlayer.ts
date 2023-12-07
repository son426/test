import { useState } from 'react';
import TrackPlayer, { Capability } from 'react-native-track-player';
import { useRecoilState } from 'recoil';
import { TrackInfo, trackInfoState } from '../atoms';

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

  const addTracks = async tracks => {
    try {
      await TrackPlayer.add(tracks);
    } catch (error) {
      console.error('addTracks Error:', error);
    }
  };

  const skipTrack = async (trackId: number) => {
    try {
      const trackDetail = await TrackPlayer.getTrack(trackId);
      if (trackDetail) {
        const trackInfo: TrackInfo = {
          id: trackDetail.id,
          url: trackDetail.url ?? '',
          title: trackDetail.title ?? '',
          artist: trackDetail.artist,
          album: trackDetail.album,
          genre: trackDetail.genre,
          artwork: trackDetail.artwork,
          duration: trackDetail.duration,
        };
        setCurrentTrack(trackInfo);
      }
      await TrackPlayer.skip(trackId);
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
  };
};

export default useTrackPlayer;
