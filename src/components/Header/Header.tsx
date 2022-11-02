import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';

export const Header: React.FC = (): JSX.Element => {
  const {colors} = useContext(ThemeContext);

  return (
    <Text style={[style.container, {backgroundColor: colors.primaryDark}]}>
      Custom Header
    </Text>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
