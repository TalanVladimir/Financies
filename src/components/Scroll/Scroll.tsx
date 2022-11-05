import React, {useContext} from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {ThemeContext} from '../../providers/ThemeProvider';

interface Props {
  children: JSX.Element[] | JSX.Element;
  startFromTop: boolean;
}

export const Scroll: React.FC<Props> = ({
  children,
  startFromTop,
}): JSX.Element => {
  const {colors} = useContext(ThemeContext);
  const startStyle = startFromTop ? 0 : 1;

  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{flexGrow: startStyle, justifyContent: 'center'}}
      contentInsetAdjustmentBehavior="automatic"
      style={[styles.container, {backgroundColor: colors.white}]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
  },
});
