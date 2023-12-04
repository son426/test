import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import { BOTTOM_HEIGHT } from '../utils';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerRouter, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

interface IBottom {
  playlistAnimation: Animated.Value;
}

export default function Bottom({ playlistAnimation }: IBottom) {
  return (
    <Animated.View
      style={{
        marginBottom: playlistAnimation.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, -50, -50],
        }),
      }}>
      <View
        style={{ backgroundColor: '#222', paddingBottom: getBottomSpace() }}>
        <View style={{ height: BOTTOM_HEIGHT }}>
          <View style={{ flexDirection: 'row' }}>
            <BottomItem name={'home-filled'} title={'홈'} route="Main" />
            {/* <BottomItem name={'explore'} title={'둘러보기'} route="Search" /> */}
            <BottomItem name={'library-music'} title={'보관함'} route="My" />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

interface IBottomItem {
  name: string;
  title: string;
  route: string;
}

function BottomItem({ name, title, route }: IBottomItem) {
  const navigation = useNavigation();

  const onPressBottomTab = () => {
    navigation.navigate(route);
  };

  return (
    <TouchableOpacity
      style={{ alignItems: 'center', flex: 1 }}
      onPress={onPressBottomTab}>
      <View style={{ marginVertical: 4 }}>
        <Icon name={name} color="white" size={30} />
      </View>
      <Text style={{ color: 'white', fontSize: 12 }}>{title}</Text>
    </TouchableOpacity>
  );
}
