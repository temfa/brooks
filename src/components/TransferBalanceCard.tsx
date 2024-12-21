/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {formatter} from '../utils/helper';
import {fonts} from '../constants/fonts';

const TransferBalanceCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.single}>
        <Text style={styles.text}>Current Balance</Text>
        <Text style={styles.title}>{formatter(0)}</Text>
      </View>
      <View style={{height: 34, width: 0.8, backgroundColor: 'white'}} />
      <View style={styles.single}>
        <Text style={styles.text}>Ledger Balance</Text>
        <Text style={styles.title}>{formatter(0)}</Text>
      </View>
    </View>
  );
};

export default TransferBalanceCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 42,
    alignItems: 'center',
    backgroundColor: '#0E43F6',
    justifyContent: 'center',
    paddingVertical: 36,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 112,
  },
  single: {},
  text: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: fonts.WorkMedium,
    lineHeight: 12,
  },
  title: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 24,
    lineHeight: 28,
    color: '#FFFFFF',
  },
});
