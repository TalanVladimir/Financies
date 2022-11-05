import React, {useContext, useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {auth, logout, sendVerification, update} from '../../firebase/firebase';
import {ThemeContext} from '../../providers/ThemeProvider';
import {Scroll} from '../Scroll/Scroll';

export const Profile = () => {
  const {colors} = useContext(ThemeContext);
  // const [user] = useState<FirebaseAuthTypes.User | null>(null);
  const [user] = useAuthState(auth);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');
  const [verify, setVerify] = useState<boolean>(false);

  const [completed, setCompleted] = useState<boolean>(true);

  useEffect(() => {
    const currentUser = user;
    if (currentUser) {
      setName(currentUser.displayName ? currentUser.displayName : '');
      setEmail(currentUser.email ? currentUser.email : '');
      setPhoto(currentUser.photoURL ? currentUser.photoURL : '');
      setVerify(currentUser.emailVerified ? currentUser.emailVerified : false);
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

  const imgDefUser = require('../../assets/default_user.png');

  return (
    <View style={styles.container}>
      <Scroll startFromTop={false}>
        <ImageBackground
          source={imgDefUser}
          resizeMode="cover"
          style={styles.photo}>
          <Text
            style={[
              styles.photoText,
              {
                color: colors.primaryText,
              },
            ]}>
            Photo
          </Text>
        </ImageBackground>
        <TextInput
          style={[
            styles.input,
            {backgroundColor: colors.primaryLight, color: colors.primaryText},
          ]}
          placeholder="Not defined user name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[
            styles.input,
            {backgroundColor: colors.primaryLight, color: colors.secondaryText},
          ]}
          value={email}
          editable={false}
        />
        <TouchableOpacity
          style={[styles.touchable, {backgroundColor: colors.primaryDark}]}
          onPress={sendVerification}>
          <Text style={[styles.push, {color: colors.white}]}>
            {verify ? 'Verified' : 'Not Verified'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchable, {backgroundColor: colors.primaryDark}]}
          onPress={updateProfile}>
          <Text style={[styles.push, {color: colors.white}]}>
            {completed ? 'Update' : 'Updating'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchable, {backgroundColor: colors.accent}]}
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
          <Text style={[styles.push, {color: colors.white}]}>Logout</Text>
        </TouchableOpacity>
      </Scroll>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  photoText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    paddingBottom: 10,
  },
  input: {
    alignSelf: 'center',
    marginTop: 5,
    width: 250,
    borderRadius: 15,
    borderWidth: 3,
    padding: 5,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '900',
  },
  touchable: {
    alignSelf: 'center',
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
