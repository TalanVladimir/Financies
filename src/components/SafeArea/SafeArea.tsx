import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const SafeArea: React.FC<Props> = ({children}): JSX.Element => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
