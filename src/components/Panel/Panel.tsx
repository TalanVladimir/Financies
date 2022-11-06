import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';
import {NavigationNameType} from '../../types/navigation';
import {PanelItem} from './PanelItem';

export const Panel: React.FC = (): JSX.Element => {
  const {colors} = useContext(ThemeContext);

  const [page, setPage] = useState<NavigationNameType>('Buy');

  return (
    <View style={[styles.container, {borderColor: colors.divider}]}>
      <PanelItem name={'Buy'} page={page} setPage={setPage} />
      <PanelItem name={'Financies'} page={page} setPage={setPage} />
      <PanelItem name={'Profile'} page={page} setPage={setPage} />
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
