import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {login} from '../../firebase/firebase';
import {RootStackParamList} from '../../navigation/Navigation';
import {ThemeContext} from '../../providers/ThemeProvider';

export const LoginScreen = () => {
  const {colors} = useContext(ThemeContext);
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('vovkus@gmail.com');
  const [password, setPassword] = useState('lopulopas111');
  const [error, setError] = useState(false);

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
          login(email, password)
            .then(userCredential => {
              userCredential.user;
            })
            .catch(() => {
              setError(true);
            });
        }}>
        <Text style={styles.push}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.white}]}
        onPress={() => {
          setError(false);
          navigate('Register');
        }}>
        <Text style={styles.push}>Create an account</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{error && 'Login error'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  input: {
    margin: 7,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  button: {
    margin: 7,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  push: {
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
  error: {
    marginTop: 10,
    textAlign: 'center',
  },
});
