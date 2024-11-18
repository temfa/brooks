/* eslint-disable curly */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactNode} from 'react';
import CaretRightSvg from '../assets/svgs/caretRight';
import {RootStackParamList} from '../utils/type';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {fonts} from '../constants/fonts';

type Props = {
  icon: ReactNode;
  link: keyof RootStackParamList;
  title: string;
  params?: RootStackParamList[keyof RootStackParamList];
};

const AirtimeSingle: FC<Props> = ({icon, title, link, params}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (link === 'GetElectricity' || link === 'ChoosePackages') {
          navigation.navigate(link, params as {title: string}); // Explicit type assertion
        } else {
          navigation.navigate(link); // No params for other screens
        }
      }}>
      <View style={styles.containerSide}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <CaretRightSvg />
    </Pressable>
  );
};

export default AirtimeSingle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16.5,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E1DDDD',
  },
  containerSide: {
    flexDirection: 'row',
    gap: 17,
    alignItems: 'center',
    width: '85%',
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    color: '#394455',
    fontFamily: fonts.WorkSemiBold,
    flexWrap: 'wrap',
  },
});
