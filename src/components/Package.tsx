/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactNode} from 'react';
import CaretRightSvg from '../assets/svgs/caretRight';
import {RootStackParamList} from '../utils/type';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {fonts} from '../constants/fonts';

type Props = {
  icon: ReactNode;
  title: string;
  link: keyof RootStackParamList;
  params?: any;
  text: string;
};

const Package: FC<Props> = ({icon, title, text, link, params}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(link, params)}>
      <View style={styles.containerSide}>
        {icon}
        <View style={{gap: 4}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <CaretRightSvg />
    </Pressable>
  );
};

export default Package;

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
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    color: '#4C4E52',
    fontFamily: fonts.WorkMedium,
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: '#6B6E73',
    fontFamily: fonts.WorkLight,
  },
});
