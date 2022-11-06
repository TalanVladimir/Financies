import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';
import {FinanceItemType} from '../../types/financies';

type Props = {
  item: FinanceItemType;
};

export const FinanciesItem: React.FC<Props> = ({item}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const {category, product, sum} = item;

  const fontColor = colors.secondaryText;

  return (
    <View style={[styles.container, {borderColor: colors.divider}]}>
      <Text style={[styles.data, {color: fontColor}]}>{category}</Text>
      <Text style={[styles.data, {color: fontColor}]}>{product}</Text>
      <Text style={[styles.data, {color: fontColor}]}>{sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  data: {
    flex: 1,
    textAlign: 'center',
  },
});
