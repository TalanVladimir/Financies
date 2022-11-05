import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';
import {PanelItem} from './PanelItem';

export const Panel: React.FC = (): JSX.Element => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {borderColor: colors.divider}]}>
      <PanelItem name={'Buy'} />
      <PanelItem name={'Financies'} />
      <PanelItem name={'Profile'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
  },
});
