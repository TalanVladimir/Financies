import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FinanceItemsMock} from '../../../__mocks__/FinanceItems.mock';
import {Scroll} from '../Scroll/Scroll';
import {FinanciesItem} from './FinanciesItem';

export const Financies = () => {
  return (
    <View style={styles.container}>
      <Scroll startFromTop={true}>
        {FinanceItemsMock.map((item, index) => (
          <FinanciesItem key={index} index={index} item={item} />
        ))}
      </Scroll>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
