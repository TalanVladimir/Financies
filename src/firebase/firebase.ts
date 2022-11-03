import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@firebase/auth';
import {app} from './firebase-app';

const auth = getAuth(app);

const register = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = async () => {
  return signOut(auth);
};

const update = async (data: {displayName: string; photoURL: string}) => {
  const user = await auth.currentUser;
  return user !== null ? updateProfile(user, data) : null;
};

const sendVerification = async () => {
  const user = await auth.currentUser;
  return user !== null ? sendEmailVerification(user) : null;
};

export {auth, register, login, update, sendVerification, logout};
