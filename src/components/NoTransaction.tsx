import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BigCardSvg from '../assets/svgs/bigCardSvg';
import {fonts} from '../constants/fonts';

const NoTransaction = () => {
  return (
    <View style={styles.noHistory}>
      <BigCardSvg />
      <View style={styles.noHistoryDetails}>
        <Text style={styles.noTitle}>No transaction found</Text>
        <Text style={styles.noText}>
          There is no account transaction done yet
        </Text>
      </View>
    </View>
  );
};

export default NoTransaction;

const styles = StyleSheet.create({
  noHistory: {
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noHistoryDetails: {
    gap: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTitle: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: fonts.WorkBold,
    color: '#0D0906',
  },
  noText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: fonts.WorkRegular,
    color: '#A9ACBA',
  },
});
