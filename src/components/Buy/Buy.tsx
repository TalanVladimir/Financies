import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BuyItemsMock} from '../../../__mocks__/BuyItems.mock';
import {Scroll} from '../Scroll/Scroll';
import {BuyItem} from './BuyItem';

export const Buy: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Scroll startFromTop={true}>
        {BuyItemsMock.map((item, index) => (
          <BuyItem key={index} index={index} item={item} />
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
