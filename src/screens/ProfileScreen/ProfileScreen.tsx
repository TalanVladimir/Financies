import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';

export const ProfileScreen = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <View>
      <Text style={{color: colors.primaryText}}>HomeScreen</Text>
    </View>
  );
};
