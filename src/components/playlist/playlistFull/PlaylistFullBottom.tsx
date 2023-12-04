import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

interface PlaylistProps {
  playlistAnimation: Animated.Value;
}

export default function PlaylistFullBottom({
  playlistAnimation,
}: PlaylistProps) {
  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: playlistAnimation.interpolate({
            inputRange: [height / 2, height],
            outputRange: [0, 50 + getBottomSpace()],
          }),
          opacity: playlistAnimation.interpolate({
            inputRange: [height / 2, height],
            outputRange: [0, 1],
          }),
        },
      ]}>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>다음트랙</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>가사</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>관련항목</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  bottomView: {
    flexDirection: 'row',
    height: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
