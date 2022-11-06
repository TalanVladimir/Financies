import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ThemeContext} from '../../providers/ThemeProvider';
import {
  NavigationNameType,
  NavigationStackParamList,
} from '../../types/navigation';

type Props = {
  name: NavigationNameType;
  page: NavigationNameType;
  setPage: (page: NavigationNameType) => void;
};

export const PanelItem: React.FC<Props> = ({
  name,
  page,
  setPage,
}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const {navigate} =
    useNavigation<StackNavigationProp<NavigationStackParamList>>();

  const isActive = page === name;

  return (
    <Text
      style={[
        styles.item,
        {
          backgroundColor: colors.primary,
          color: isActive ? colors.white : colors.primaryDark,
        },
      ]}
      onPress={() => {
        setPage(name);
        navigate(name);
      }}>
      {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 60,
    height: 60,
    flex: 1,
    fontSize: 16,
    alignContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: '900',
  },
});
