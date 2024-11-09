/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import InfoSvg from '../assets/svgs/InfoSvg';
import {fonts} from '../constants/fonts';
import {formatter} from '../utils/helper';
import Icon, {Icons} from './Icons';
import CalenderSvg from '../assets/svgs/calenderSvg';
import CreditSvg from '../assets/svgs/creditSvg';
import DebitSvg from '../assets/svgs/debitSvg';

type Props = {
  action: () => void;
};

const Balance: FC<Props> = ({action}) => {
  const [close, setClose] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.accountBalance}>
        <View style={styles.accountNumber}>
          <Text style={styles.accountText}>2124567897</Text>
          <Pressable onPress={action}>
            <InfoSvg />
          </Pressable>
        </View>
        <View style={styles.totalBalance}>
          <View style={styles.totalBalnceCont}>
            <Text style={styles.totalBalnceText}>Total Balance</Text>
            <Text style={styles.balance}>
              {close ? '********' : formatter(0, 'NGN')}
            </Text>
          </View>
          <Pressable onPress={() => setClose(!close)}>
            <Icon
              type={Icons.Feather}
              size={20}
              name={close ? 'eye-off' : 'eye'}
              color="white"
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.today}>
        <View style={styles.todayTexts}>
          <Text style={styles.todayText}>Today</Text>
          {/* <View style={styles.todayTexts}> */}
          <Text style={styles.credit}>
            Credit +₦45,000 <CreditSvg />
          </Text>
          <Text style={styles.credit}>|</Text>
          <Text style={[{...styles.credit}, {color: '#FF0034'}]}>
            Debit -₦10,000 <DebitSvg />
          </Text>
          {/* </View> */}
        </View>
        <Pressable>
          <Text style={styles.historyText}>
            <CalenderSvg /> History
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    gap: 2,
    marginTop: 11,
  },
  accountBalance: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#0c79d7',
    gap: 16,
    paddingHorizontal: 21,
    paddingTop: 12,
    paddingBottom: 20,
  },
  accountNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 14,
    fontFamily: fonts.WorkMedium,
    lineHeight: 16.42,
    color: '#B4E1FF',
  },
  totalBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  totalBalnceCont: {
    gap: 2,
  },
  totalBalnceText: {
    fontFamily: fonts.WorkRegular,
    fontSize: 16,
    lineHeight: 16.9,
    color: 'white',
  },
  balance: {
    fontFamily: fonts.WorkMedium,
    fontSize: 28,
    lineHeight: 32,
    color: 'white',
  },
  today: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: '#CEE2FC',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todayTexts: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  todayText: {
    fontSize: 10,
    fontFamily: fonts.WorkRegular,
    lineHeight: 10,
    color: '#000000',
  },
  credit: {
    fontSize: 10,
    fontFamily: fonts.WorkRegular,
    lineHeight: 10,
    color: '#2F3133',
  },

  historyText: {
    fontSize: 13,
    lineHeight: 15,
    color: '#111212',
    fontFamily: fonts.WorkMedium,
  },
});
