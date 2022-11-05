import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';
import {FinanceItemType} from '../../types/financies';

type Props = {
  index: number;
  item: FinanceItemType;
};

export const FinanciesItem: React.FC<Props> = ({index, item}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const {category, product, sum} = item;

  const isEven = index % 2 === 0;
  const bgColor = isEven ? colors.primaryLight : colors.white;
  const fontColor = isEven ? colors.primaryDark : colors.primary;

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.index, {color: fontColor}]}>{index}</Text>
      <Text style={[styles.category, {color: fontColor}]}>{category}</Text>
      <Text style={[styles.product, {color: fontColor}]}>{product}</Text>
      <Text style={[styles.sum, {color: fontColor}]}>{sum}</Text>
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
    flex: 0.3,
    textAlign: 'center',
  },
  product: {
    fontWeight,
    flex: 0.3,
    textAlign: 'center',
  },
  sum: {
    fontWeight,
    flex: 0.3,
    textAlign: 'center',
  },
});
