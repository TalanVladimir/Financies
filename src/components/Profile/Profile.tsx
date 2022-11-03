import React, {useContext, useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';

import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {auth, logout, sendVerification, update} from '../../firebase/firebase';
import {ThemeContext} from '../../providers/ThemeProvider';

export const Profile = () => {
  const {colors} = useContext(ThemeContext);
  // const [user] = useState<FirebaseAuthTypes.User | null>(null);
  const [user] = useAuthState(auth);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [verify, setVerify] = useState<boolean>(false);

  const [completed, setCompleted] = useState<boolean>(true);

  useEffect(() => {
    const currentUser = user;
    if (currentUser) {
      if (currentUser.displayName) {
        setName(currentUser.displayName);
      }
      setEmail(currentUser.email);
      setPhoto(currentUser.photoURL);
      setVerify(currentUser.emailVerified);
    }
  }, [user]);

  const updateProfile = () => {
    setCompleted(false);

    const displayName = name ? name : '';
    const photoURL = photo ? photo : '';

    const updateData = {displayName, photoURL};

    update(updateData)
      .then(() => {
        setCompleted(true);
      })
      .catch((err: Error) => {
        setCompleted(false);
        console.log(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.photo, {backgroundColor: colors.primaryLight}]} />
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>name: {name}</Text>
        <TextInput
          style={styles.input}
          placeholder="not defined"
          value={name}
          onChangeText={setName}
        />
      </View>
      <Text style={styles.email}>email: {email}</Text>
      <TouchableOpacity
        style={[styles.touchable, {backgroundColor: colors.primaryDark}]}
        onPress={sendVerification}>
        <Text style={styles.push}>{verify ? 'Verified' : 'Not Verified'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchable, {backgroundColor: colors.primaryDark}]}
        onPress={updateProfile}>
        <Text style={styles.push}>{completed ? 'Update' : 'Updating'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() =>
          logout().catch((err: Error) => {
            ToastAndroid.showWithGravityAndOffset(
              err.message,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              50,
            );
          })
        }>
        <Text style={styles.push}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 200,
    marginBottom: 10,
  },
  name: {
    width: 250,
    backgroundColor: '#18D275',
  },
  email: {
    padding: 5,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 5,
    fontSize: 15,
    fontWeight: '900',
  },
  touchable: {
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
});
