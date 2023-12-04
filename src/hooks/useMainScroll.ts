import { useEffect, useRef } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

export default function useScroll() {
  const scrollStartRef = useRef<number>(0);
  const showHeaderRef = useRef<boolean>(true);
  const headerAnimation = useRef(new Animated.Value(0)).current;
  const headerBackgroundAnimation = useRef(new Animated.Value(0)).current;

  const onScrollBeginDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    scrollStartRef.current = y;
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;

    // 위로 올라가는 헤더
    if (0 < dy && dy < 40 && showHeaderRef.current)
      headerAnimation.setValue(dy);

    // 아래로 내려오는 헤더
    if (-40 < dy && dy < 0 && !showHeaderRef.current)
      headerAnimation.setValue(40 + dy);

    // 헤더 백그라운드 애니메이션
    headerBackgroundAnimation.setValue(y);
  };

  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;

    if (0 < dy && showHeaderRef.current) {
      // 가속 느낌. 40을 다 안땡겨도 스르륵 붙음
      Animated.spring(headerAnimation, {
        toValue: 40,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = false;
    }

    // 아래로 내려오는 헤더
    if (dy < 0 && !showHeaderRef.current) {
      Animated.spring(headerAnimation, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = true;
    }
  };

  return {
    onScrollBeginDrag,
    onScroll,
    onScrollEndDrag,
    headerAnimation,
    headerBackgroundAnimation,
  };
}
