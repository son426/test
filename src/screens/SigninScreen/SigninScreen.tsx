import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Screen from '../../components/Screen';
import { loginState } from '../../atoms';
import { useRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../modules/Colors';

export default function SigninScreen() {
  const [getLoginState, setLoginState] = useRecoilState(loginState);

  const navigation = useNavigation();

  // 로그인 로직
  const onPressSignin = async () => {
    const loginInfo = { isLoggedIn: true, user: 'User Name' };
    setLoginState(loginInfo);
    await AsyncStorage.setItem('loginState', JSON.stringify(loginInfo));
    navigation.navigate('Main');
  };

  return (
    <Screen title="로그인">
      <View style={styles.container}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Homebrew</Text>
        <TouchableOpacity onPress={onPressSignin} style={styles.button}>
          <Text style={styles.buttonText}>구글 로그인</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#FFC700',
    marginBottom: 20,
    fontWeight: '900',
  },
  button: {
    borderWidth: 2,
    borderColor: Colors.accent1,
    width: '80%',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.accent1,
    fontSize: 18,
    fontWeight: '900',
  },
});
