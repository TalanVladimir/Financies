import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';

import {BuyItemType} from '../../types/buy';

type Props = {
  index: number;
  item: BuyItemType;
};

export const BuyItem: React.FC<Props> = ({index, item}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const {category, product, multiply, price, email} = item;

  const isEven = index % 2 === 0;
  const bgColor = isEven ? colors.primaryLight : colors.white;
  const fontColor = isEven ? colors.primaryDark : colors.primary;

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.index, {color: fontColor}]}>{index}</Text>
      <Text style={[styles.category, {color: fontColor}]}>{category}</Text>
      <Text style={[styles.product, {color: fontColor}]}>{product}</Text>
      <Text style={[styles.multiply, {color: fontColor}]}>{multiply}</Text>
      <Text style={[styles.price, {color: fontColor}]}>{price}</Text>
      <Text style={[styles.email, {color: fontColor}]}>{email}</Text>
    </View>
  );
};

const fontWeight = '600';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  index: {
    fontWeight,
    flex: 0.1,
    textAlign: 'center',
  },
  category: {
    fontWeight,
    flex: 0.2,
    textAlign: 'center',
  },
  product: {
    fontWeight,
    flex: 0.2,
    textAlign: 'center',
  },
  multiply: {
    fontWeight,
    flex: 0.2,
    textAlign: 'center',
  },
  price: {
    fontWeight,
    flex: 0.2,
    textAlign: 'center',
  },
  email: {
    fontWeight,
    flex: 0.2,
    textAlign: 'center',
  },
});
