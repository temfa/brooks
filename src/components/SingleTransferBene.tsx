import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import TrashCanSvg from '../assets/svgs/trashCan';
import {fonts} from '../constants/fonts';

type Props = {
  bank: string;
  account: number;
  name: string;
};

const SingleTransferBene: FC<Props> = ({bank, account, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.bank}>{bank}</Text>
        <Text style={styles.account}>{account}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <TrashCanSvg />
    </View>
  );
};

export default SingleTransferBene;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 0.45,
    borderBottomColor: '#D1CACA',
  },
  left: {
    gap: 2,
  },
  bank: {
    fontSize: 12,
    lineHeight: 12,
    color: '#7D7F88',
    fontFamily: fonts.WorkRegular,
  },
  account: {
    fontSize: 18.07,
    lineHeight: 18.07,
    color: '#1D1D1F',
    fontFamily: fonts.WorkMedium,
  },
  name: {
    fontSize: 12,
    lineHeight: 15,
    color: '#7D7F88',
    fontFamily: fonts.WorkRegular,
  },
});
