import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen/ProfileScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {Menu} from '../components/Menu/Menu';
import {RegisterScreen} from '../screens/RegisterScreen/RegisterScreen';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase/firebase';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
};

export const Navigation: React.FC = (): JSX.Element => {
  const [user] = useAuthState(auth);

  const ShowScreens = user ? (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          // header: () => <Header />,
        }}
      />
    </>
  ) : (
    <>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        {ShowScreens}
      </Stack.Navigator>
      {user && <Menu />}
    </NavigationContainer>
  );
};
