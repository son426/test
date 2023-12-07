import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../modules/Colors';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { loginState } from '../atoms';
import { useRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ScreenProps {
  title?: string;
  children?: React.ReactNode;
  headerAnimation?: Animated.Value;
}

export default function Screen({
  children,
  title,
  headerAnimation,
}: ScreenProps) {
  const { goBack, canGoBack } = useNavigation();
  const [getLoginState, setLoginState] = useRecoilState(loginState);

  const onPressBackButton = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleLogout = async () => {
    setLoginState({ isLoggedIn: false, user: null });
    await AsyncStorage.removeItem('loginState');
  };

  return (
    <SafeAreaView style={styles.container}>
      {headerAnimation && (
        <Animated.View
          style={{
            marginTop: headerAnimation.interpolate({
              inputRange: [-40, 0, 40],
              outputRange: [0, 0, -45],
            }),
            opacity: headerAnimation.interpolate({
              inputRange: [-40, 0, 20],
              outputRange: [1, 1, 0],
            }),
          }}>
          <View style={styles.header}>
            <View style={styles.left}>
              {canGoBack() && (
                <TouchableOpacity onPress={onPressBackButton}>
                  <Text style={styles.backButtonText}>
                    <Icon name="arrow-back-ios" size={20} color="white" />
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.center}>
              <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={styles.right}>
              {getLoginState.isLoggedIn && (
                <TouchableOpacity onPress={handleLogout}>
                  <Text>처음으로</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Animated.View>
      )}
      {!headerAnimation && (
        <View style={styles.header}>
          <View style={styles.left}>
            {canGoBack() && (
              <TouchableOpacity onPress={onPressBackButton}>
                <Text style={styles.backButtonText}>
                  <Icon name="arrow-back-ios" size={20} color="white" />
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.center}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
          <View style={styles.right}>
            {getLoginState.isLoggedIn && (
              <TouchableOpacity onPress={handleLogout}>
                <Text>처음으로</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
      <View style={styles.body}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgBlack,
  },
  header: {
    height: 48,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
  body: {
    flex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: Colors.white,
  },
});
