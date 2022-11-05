import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';
import {NavigationNameType, RootStackParamList} from '../../types/navigation';
import {login, register} from '../../firebase/firebase';

type Props = {navigateTo: NavigationNameType};

export const EmailPassword: React.FC<Props> = ({navigateTo}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('vovkus@gmail.com');
  const [password, setPassword] = useState('lopulopas111');
  const [error, setError] = useState(false);

  const isLogin = navigateTo === 'Register' ? true : false;
  const screenAction = isLogin ? login : register;

  return (
    <View style={[styles.container, {backgroundColor: colors.white}]}>
      <TextInput
        placeholder="Email"
        style={[
          styles.input,
          {
            backgroundColor: colors.primaryLight,
            color: colors.primaryText,
          },
        ]}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={[
          styles.input,
          {
            backgroundColor: colors.primaryLight,
            color: colors.primaryText,
          },
        ]}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.primaryDark}]}
        onPress={() => {
          screenAction(email, password).catch((err: Error) => {
            ToastAndroid.showWithGravityAndOffset(
              err.message,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              50,
            );
          });
        }}>
        <Text style={[styles.push, {color: colors.white}]}>
          {isLogin ? 'Login' : 'Register'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.white}]}
        onPress={() => {
          setError(false);
          navigate(navigateTo);
        }}>
        <Text style={[styles.push, {color: colors.secondaryText}]}>
          {isLogin ? 'Create an account' : 'Login'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.error}>{error && 'Login error'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    fontWeight: '900',
    marginTop: 5,
    width: 250,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 15,
    height: 40,
  },
  button: {
    width: 250,
    marginTop: 5,
    borderWidth: 3,
    borderRadius: 15,
    height: 40,
  },
  push: {
    flex: 1,
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  error: {
    marginTop: 10,
    textAlign: 'center',
  },
});
