import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';
import {BuyItemType} from '../../types/buy';

type Props = {
  item?: BuyItemType;
  setItemId: (id: number) => void;
  updateItem(item: BuyItemType): void;
};

export const BuyModify: React.FC<Props> = ({
  item,
  setItemId,
  updateItem,
}): JSX.Element => {
  const {colors} = useContext(ThemeContext);

  const id = item?.id;

  const [category, setCategory] = useState(item?.category);
  const [product, setProduct] = useState(item?.product);
  const [multiply, setMultiply] = useState(item?.multiply);
  const [price, setPrice] = useState(item?.price);
  const [email, setEmail] = useState(item?.email);

  useEffect(() => {
    if (item !== undefined) {
      setCategory(item.category ? item.category : '');
      setProduct(item.product ? item.product : '');
      setMultiply(item.multiply ? item.multiply : '0');
      setPrice(item.price ? item.price : '0');
      setEmail(item.email ? item.email : '');
    }
  }, [item]);

  const setNumb = (func: (numb: string) => void, text: string) => {
    const isInteger = (num: string) => /^-?\d+(?:[.,]\d*?)?$/.test(num + '');

    if (!isInteger(text)) {
      text = text.substring(0, text.length - 1);
    }

    if (text.length > 1 && text.substring(0, 1) === '0') {
      text = text.slice(1);
    }

    func(text);
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.white, borderColor: colors.black},
      ]}>
      <View style={styles.view}>
        <Text style={[styles.title, {color: colors.primary}]}>Category</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.primaryLight,
              borderColor: colors.black,
              color: colors.white,
            },
          ]}
          placeholder="Need"
          value={category}
          onChangeText={setCategory}
        />
        <Text style={[styles.title, {color: colors.primary}]}>Product</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.primaryLight,
              borderColor: colors.black,
              color: colors.white,
            },
          ]}
          placeholder="Need"
          value={product}
          onChangeText={setProduct}
        />
        <Text style={[styles.title, {color: colors.primary}]}>Multiply</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.primaryLight,
              borderColor: colors.black,
              color: colors.white,
            },
          ]}
          keyboardType="numeric"
          value={multiply ? multiply : '0'}
          onChangeText={(text: string) => setNumb(setMultiply, text)}
        />
        <Text style={[styles.title, {color: colors.primary}]}>Price</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.primaryLight,
              borderColor: colors.black,
              color: colors.white,
            },
          ]}
          keyboardType="numeric"
          value={price ? price : '0'}
          onChangeText={(text: string) => setNumb(setPrice, text)}
        />
        <Text style={[styles.title, {color: colors.primary}]}>Email</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colors.primaryLight,
              borderColor: colors.black,
              color: colors.secondaryText,
            },
          ]}
          placeholder="Need"
          editable={false}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.touch,
            {
              backgroundColor: colors.accent,
              borderColor: colors.black,
            },
          ]}
          onPress={() => {
            const newId = id ? id : -3;
            if (category !== undefined && product !== undefined) {
              const newItem: BuyItemType = {
                id: newId,
                category,
                product,
                multiply: multiply ? multiply : '0',
                price: price ? price : '0',
                email: email ? email : '',
              };
              updateItem(newItem);
              setItemId(-1);
            }
          }}>
          <Text style={[styles.push, {color: colors.white}]}>
            {!id ? 'Add Item' : 'Update Item'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.touch,
            {
              backgroundColor: colors.white,
              borderColor: colors.black,
            },
          ]}
          onPress={() => {
            setItemId(-1);
          }}>
          <Text style={styles.push}>Close window</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const fontWeight = '600';
const width = 250;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    width,
    flex: 1,
    position: 'absolute',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'column',
  },
  view: {
    margin: 5,
    width: width - 20,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontWeight,
    textAlign: 'center',
  },
  input: {
    borderWidth: 3,
    fontWeight,
    borderRadius: 15,
    padding: 0,
    height: 40,
    textAlign: 'center',
  },
  buttons: {
    width: width - 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  touch: {
    borderWidth: 3,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  push: {
    textAlign: 'center',
  },
});
