# financies


# Need To install

## firebase-app.ts
src/firebase/firebase-app.ts
import {initializeApp} from 'firebase/app';
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
export const app = initializeApp(firebaseConfig);

## android/app/src/main/assets/index.android.bundle
need to create dir: android/app/src/main/assets/

## android/local.properties
sdk.dir = /home/{userName}/Android/Sdk