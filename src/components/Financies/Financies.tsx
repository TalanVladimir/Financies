import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FinanceItemsMock} from '../../../__mocks__/FinanceItems.mock';
import {FinanceItemType} from '../../types/financies';
import {Scroll} from '../Scroll/Scroll';
import {FinanciesItem} from './FinanciesItem';

const sortFinanciesItems = (a: FinanceItemType, b: FinanceItemType) => {
  if (a.category === b.category) {
    return a.product.toLowerCase() < b.product.toLowerCase() ? -1 : 1;
  } else {
    return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1;
  }
};

export const Financies: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Scroll startFromTop={true}>
        {FinanceItemsMock.sort(sortFinanciesItems).map((item, index) => (
          <FinanciesItem key={index} item={item} />
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
