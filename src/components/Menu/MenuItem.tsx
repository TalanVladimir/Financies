import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {ThemeContext} from '../../providers/ThemeProvider';

type Props = {
  name: 'Home' | 'Login' | 'Register' | 'Profile';
};

export const MenuItem: React.FC<Props> = ({name}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Text
      style={[styles.item, {backgroundColor: colors.primary}]}
      onPress={() => {
        navigate(name);
      }}>
      {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 60,
    height: 60,
    flex: 1,
    alignContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
