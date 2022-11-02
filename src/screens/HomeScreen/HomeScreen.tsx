import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {logout} from '../../firebase/firebase';
import {ThemeContext} from '../../providers/ThemeProvider';

export const HomeScreen = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.primaryLight}]}>
      <Text style={{color: colors.primaryText}}>HomeScreen</Text>
      <Button
        title="Log out"
        color={colors.primaryDark}
        onPress={() => logout()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
