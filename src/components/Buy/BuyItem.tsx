import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';

import {BuyItemType} from '../../types/buy';

type Props = {
  index: number;
  item: BuyItemType;
  setItemId: (id: number) => void;
};

export const BuyItem: React.FC<Props> = ({
  index,
  item,
  setItemId,
}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const {id, category, product, multiply, price, email} = item;

  const fontColor = colors.secondaryText;

  return (
    <TouchableOpacity
      style={[styles.container, {borderColor: colors.divider}]}
      onPress={() => setItemId(id)}>
      <Text
        style={[styles.index, {borderColor: colors.divider, color: fontColor}]}>
        {index}
      </Text>
      <Text style={[styles.data, {color: fontColor}]}>{category}</Text>
      <Text style={[styles.data, {color: fontColor}]}>{product}</Text>
      <Text style={[styles.data, {color: fontColor}]}>{multiply}</Text>
      <Text style={[styles.data, {color: fontColor}]}>{price}</Text>
      <Text style={[styles.data, {color: fontColor}]}>{email}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  index: {
    flex: 0.1,
    borderRightWidth: 1,
    textAlign: 'center',
  },
  data: {
    flex: 0.4,
    textAlign: 'center',
  },
});
