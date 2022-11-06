import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {BuyItemsMock} from '../../../__mocks__/BuyItems.mock';
import {auth} from '../../firebase/firebase';
import {ThemeContext} from '../../providers/ThemeProvider';
import {BuyItemType} from '../../types/buy';
import {Scroll} from '../Scroll/Scroll';
import {BuyItem} from './BuyItem';
import {BuyModify} from './BuyModify';

const sortBuyItems = (a: BuyItemType, b: BuyItemType) => {
  if (a.category === b.category) {
    return a.product.toLowerCase() < b.product.toLowerCase() ? -1 : 1;
  } else {
    return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1;
  }
};

export const Buy: React.FC = (): JSX.Element => {
  const [user] = useAuthState(auth);
  const {colors} = useContext(ThemeContext);
  const [itemId, setItemId] = useState(-1);

  const updateItem = (item: BuyItemType): void => {
    const index = BuyItemsMock.findIndex(
      (searchItem: BuyItemType) => searchItem.id === item.id,
    );
    if (index !== -1) {
      BuyItemsMock[index] = {...item};
    } else {
      item.email = user?.email ? user?.email : 'zopa';
      BuyItemsMock.push({...item, id: BuyItemsMock.length + 1});
    }
  };

  return (
    <View style={styles.container}>
      {itemId !== -1 && (
        <BuyModify
          item={BuyItemsMock.find(item => item.id === itemId)}
          setItemId={setItemId}
          updateItem={updateItem}
        />
      )}
      <Scroll startFromTop={true}>
        {BuyItemsMock.sort(sortBuyItems).map((item, index) => (
          <BuyItem
            key={index}
            index={index}
            item={item}
            setItemId={setItemId}
          />
        ))}
      </Scroll>
      <TouchableOpacity
        style={[
          styles.touch,
          {backgroundColor: colors.accent, borderColor: colors.black},
        ]}
        onPress={() => setItemId(-2)}>
        <Text style={[styles.add, {color: colors.white}]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    flex: 1,
    borderRadius: 55,
    borderWidth: 3,
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  add: {
    fontSize: 25,
    padding: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
});
