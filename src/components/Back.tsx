import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon, {Icons} from './Icons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../utils/type';
import {fonts} from '../constants/fonts';

const Back = ({text, subText}: {text: string; subText?: string}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          type={Icons.AntDesign}
          name="arrowleft"
          size={24}
          color="#000000"
        />
      </Pressable>
      <View>
        <Text style={styles.headerText}>{text}</Text>
        {subText && <Text style={styles.headerSubText}>{subText}</Text>}
      </View>
    </View>
  );
};

export default Back;

const styles = StyleSheet.create({
  header: {
    gap: 16,
  },
  headerText: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 24,
    lineHeight: 30,
    color: '#242424',
  },
  headerSubText: {
    fontSize: 13,
    lineHeight: 15,
    color: '#8D929A',
    fontFamily: fonts.WorkMedium,
  },
});
