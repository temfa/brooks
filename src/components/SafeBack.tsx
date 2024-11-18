import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Icon, {Icons} from './Icons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../utils/type';
import {fonts} from '../constants/fonts';

type Props = {
  headerTitle: string;
  headerText: string;
};

const SafeBack: FC<Props> = ({headerTitle, headerText}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.header}>
      <View style={styles.navigation}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type={Icons.AntDesign}
            name="arrowleft"
            size={24}
            color="#fff"
          />
        </Pressable>
      </View>
      <View style={styles.headerCaptions}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};

export default SafeBack;

const styles = StyleSheet.create({
  header: {
    height: 155,
    backgroundColor: '#0261E3',
    paddingHorizontal: 24,
    gap: 21,
    paddingTop: 13,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerCaptions: {
    gap: 6,
  },
  headerTitle: {
    fontFamily: fonts.AeonikBold,
    fontSize: 24,
    lineHeight: 30.19,
    color: '#fff',
  },
  headerText: {
    fontSize: 14,
    fontFamily: fonts.SatoshiRegular,
    lineHeight: 19,
    color: '#fff',
    width: 319,
  },
});
