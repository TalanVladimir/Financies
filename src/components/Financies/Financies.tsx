import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {logout} from '../../firebase/firebase';
import {ThemeContext} from '../../providers/ThemeProvider';

export const Financies = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.primaryLight}]}>
      <TouchableOpacity style={styles.logout} onPress={() => logout()}>
        <Text style={styles.push}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    borderWidth: 5,
    borderRadius: 15,
    width: 200,
    height: 50,
    backgroundColor: '#E95D5D',
  },
  push: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
