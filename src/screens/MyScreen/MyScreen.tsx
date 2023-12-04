import { Text, TouchableOpacity, View } from 'react-native';
import Screen from '../../components/Screen';
import { loginState } from '../../atoms';
import { useRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../modules/Colors';

export default function MyScreen() {
  const [getLoginState, setLoginState] = useRecoilState(loginState);

  const handleLogout = async () => {
    setLoginState({ isLoggedIn: false, user: null });
    await AsyncStorage.removeItem('loginState');
  };

  return (
    <Screen title="마이페이지">
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            width: '100%',
            padding: 18,
            borderWidth: 1.5,
            borderColor: Colors.accent1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 24, color: Colors.accent1 }}>
            로그아웃 버튼
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
