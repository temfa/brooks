/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Credit from '../assets/svgs/credit';
import Debit from '../assets/svgs/debit';
import {formatter} from '../utils/helper';
import {fonts} from '../constants/fonts';

type Props = {
  type: 'Debit' | 'Credit';
  name: string;
  amount: number;
  date: string;
  status: 'Successful' | 'Failed' | 'Pending';
  beneficiaryTitle: string;
  beneficiary: string;
  network?: string;
  transactionType: string;
};

const SingleTransaction: FC<Props> = ({
  type,
  name,
  amount,
  date,
  status,
  beneficiary,
  beneficiaryTitle,
  network,
  transactionType,
}) => {
  return (
    <View style={styles.container}>
      {type === 'Credit' ? <Credit /> : <Debit />}
      <View style={styles.right}>
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text
            style={[
              {...styles.amount},
              {color: type === 'Credit' ? '#00BA88' : '#E7375B'},
            ]}>
            {type === 'Debit' ? '-' : null}
            {formatter(amount)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[
              {...styles.status},
              {
                color:
                  status === 'Successful'
                    ? '#02A77A'
                    : status === 'Pending'
                    ? '#4A4AFF'
                    : '#EF0F3D',
                backgroundColor:
                  status === 'Successful'
                    ? '#DAFAF1'
                    : status === 'Pending'
                    ? '#E6E6F2'
                    : '#FCCDD7',
              },
            ]}>
            {status}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.beneficiaryTitle}>{beneficiaryTitle}</Text>
          <Text style={styles.beneficiary}>{beneficiary}</Text>
        </View>
        {transactionType === 'Airtime' && (
          <View style={styles.row}>
            <Text style={styles.beneficiaryTitle}>Network Provider</Text>
            <Text style={styles.beneficiary}>{network}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SingleTransaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderBottomWidth: 0.5,
    paddingVertical: 4,
    borderBottomColor: '#D7D3D3',
  },
  right: {
    gap: 2,
    width: '79%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.WorkMedium,
    fontSize: 16,
    lineHeight: 19,
    color: '#394455',
  },
  amount: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: fonts.WorkSemiBold,
  },
  status: {
    borderRadius: 5,
    padding: 5,
    fontFamily: fonts.WorkMedium,
    fontSize: 13,
    lineHeight: 15,
  },
  date: {
    fontSize: 11,
    lineHeight: 13,
    fontFamily: fonts.WorkRegular,
    color: '#A0A4A9',
  },
  beneficiaryTitle: {
    fontFamily: fonts.WorkLight,
    fontSize: 11,
    lineHeight: 13,
    color: '#6B6E73',
  },
  beneficiary: {
    fontSize: 11,
    lineHeight: 13,
    fontFamily: fonts.WorkRegular,
    color: '#394455',
  },
});
