import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from './src/types';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import SigninScreen from './src/screens/SigninScreen/SigninScreen';
import MainScreen from './src/screens/MainScreen/MainScreen';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';
import MyScreen from './src/screens/MyScreen/MyScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginState, trackInfoState } from './src/atoms';
import TrackPlayer, { Capability } from 'react-native-track-player';
import { songs } from './src/dummy';
import useTrackPlayer from './src/hooks/useTrackPlayer';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Screens = () => {
  const [getLoginState, setLoginState] = useRecoilState(loginState);
  const [getLoginStateFromStorage, setLoginStateFromStorage] = useState(null);

  const [trackInfo, setTrackInfo] = useRecoilState(trackInfoState);

  const [isLoading, setIsLoading] = useState(true);

  const { isPlayerReady, setupPlayer, addTracks, playTrack } = useTrackPlayer();

  useEffect(() => {
    const firstSetup = async () => {
      await setupPlayer();
      await addTracks(songs);
    };

    firstSetup();
  }, []);

  useEffect(() => {
    const loadLoginState = async () => {
      const savedState = await AsyncStorage.getItem('loginState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setLoginStateFromStorage(parsedState);
        setLoginState(parsedState);
      }

      setIsLoading(false);
    };

    loadLoginState();
  }, []);

  const renderRootStack = () => {
    // 로그인 된 상태
    if (isLoading || !isPlayerReady) {
      return <Stack.Screen name="Loading" component={LoadingScreen} />;
    }

    if (getLoginState.isLoggedIn)
      return (
        <>
          <Stack.Screen name="Main" component={MainScreen} />
          {/* <Stack.Screen name="My" component={MyScreen} />
          <Stack.Screen name="Search" component={SearchScreen} /> */}
        </>
      );

    // 로그아웃 된 상태
    return <Stack.Screen name="Signin" component={SigninScreen} />;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {renderRootStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <RecoilRoot>
      <Screens />
    </RecoilRoot>
  );
};

export default App;
