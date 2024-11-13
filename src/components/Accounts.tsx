/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {fonts} from '../constants/fonts';
import {formatter} from '../utils/helper';
import Modals from './Modals';

type Props = {
  showModal: boolean;
  setShowModal: () => void;
};

const Accounts: FC<Props> = ({setShowModal, showModal}) => {
  const account = [
    {
      accountNo: '2120456781',
      balance: 35000,
      accountName: 'Chris Mboho ',
      status: 'Active',
      isPrimary: true,
    },
    {
      accountNo: '5334204567',
      balance: 0,
      accountName: 'Chris Mboho ',
      status: 'Active',
      isPrimary: false,
    },
  ];
  return (
    <Modals visible={showModal} setFalse={setShowModal} points={[25]}>
      <View style={styles.modalContainer}>
        {account?.map((item, index) => {
          return (
            <View
              style={
                item.isPrimary
                  ? [{...styles.modalSingle}, {backgroundColor: '#0557B6'}]
                  : styles.modalSingle
              }
              key={index}>
              <View style={styles.row}>
                <Text
                  style={[
                    {...styles.accountNo},
                    {color: item.isPrimary ? '#fff' : '#1D1D1F'},
                  ]}>
                  {item.accountNo}
                </Text>
                <Text
                  style={[
                    {...styles.accountNo},
                    {
                      color: item.isPrimary ? '#fff' : '#1D1D1F',
                      fontFamily: fonts.WorkSemiBold,
                    },
                  ]}>
                  {formatter(item.balance)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text
                  style={[
                    {...styles.accountName},
                    {
                      color: item.isPrimary ? '#fff' : '#7D7F88',
                    },
                  ]}>
                  {item.accountName}
                </Text>
                <Text
                  style={[
                    {...styles.accountName},
                    {
                      color: item.isPrimary ? '#fff' : '#7D7F88',
                    },
                  ]}>
                  {item.status}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </Modals>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 38,
    gap: 16,
  },
  modalSingle: {
    gap: 5,
    borderRadius: 15,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountNo: {
    fontSize: 18,
    fontFamily: fonts.WorkRegular,
    lineHeight: 18,
  },
  accountName: {
    fontFamily: fonts.WorkRegular,
    fontSize: 10,
    lineHeight: 10,
  },
});
