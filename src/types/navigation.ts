export type NavigationNameType =
  | 'Buy'
  | 'Financies'
  | 'Login'
  | 'Register'
  | 'Profile';

export type NavigationType = {
  name: NavigationNameType;
};

export type NavigationStackParamList = {
  Buy: undefined;
  Financies: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
};
