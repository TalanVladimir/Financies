import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

import {createUserWithEmailAndPassword} from 'firebase/auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {updateProfile} from 'firebase/auth';
import {sendEmailVerification} from '@firebase/auth';

import {firebaseConfig} from './config';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const showError = (error: Error) => {
  const errorMessage = error.message;
  console.log(`message: ${errorMessage}`);
};

const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

const update = async (data: {
  displayName: string | null | undefined;
  photoURL: string | null | undefined;
}) => {
  const user = await auth.currentUser;

  if (user === null) {
    return;
  }
  updateProfile(user, data)
    .then(() => {})
    .catch(showError);
};

const send = async () => {
  const user = await auth.currentUser;

  if (user === null) {
    return;
  }
  sendEmailVerification(user);
};

import {signOut} from 'firebase/auth';
const logout = async () => {
  signOut(auth)
    .then(() => {})
    .catch(showError);
};

export {db, auth, register, login, update, send, logout};
