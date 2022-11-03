export type NavigationNameType = 'Financies' | 'Login' | 'Register' | 'Profile';

export type NavigationType = {
  name: NavigationNameType;
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Financies: undefined;
  Profile: undefined;
};
