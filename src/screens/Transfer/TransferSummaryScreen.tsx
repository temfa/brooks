/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SafeArea from '../../components/SafeArea';
import Icon, {Icons} from '../../components/Icons';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import {fonts} from '../../constants/fonts';
import {formatter} from '../../utils/helper';
import TransactionPin from '../../components/TransactionPin';

const TransferSummaryScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon
              type={Icons.AntDesign}
              name="arrowleft"
              size={24}
              color="#000000"
            />
          </Pressable>
          <Text style={styles.headerText}>Transfer Summary</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyCont}>
            <View style={{gap: 3}}>
              <Text style={styles.totalAmount}>Total Amount</Text>
              <Text style={styles.amount}>{formatter(2020)}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsHeader}>Transfer Details:</Text>
              <View style={styles.detailsBody}>
                <View style={styles.row}>
                  <Text style={styles.detailsText}>Amount</Text>
                  <Text
                    style={[
                      {...styles.detailsText},
                      {fontSize: 16, lineHeight: 16},
                    ]}>
                    {formatter(2000)}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.detailsText}>Fees</Text>
                  <Text
                    style={[
                      {...styles.detailsText},
                      {fontSize: 16, lineHeight: 16},
                    ]}>
                    {formatter(20)}
                  </Text>
                </View>
                <View style={[{...styles.row}, {borderBottomWidth: 0}]}>
                  <Text style={styles.total}>Total Debit</Text>
                  <Text style={styles.totalPay}>{formatter(2020)}</Text>
                </View>
              </View>
            </View>
            <View style={styles.sending}>
              <Text>Sending To</Text>
              <View style={[{...styles.row}, {borderBottomWidth: 0}]}>
                <Text style={styles.name}>Gideon Oluwa </Text>
                <Text style={styles.accountNo}>5334204567</Text>
              </View>
            </View>
          </View>
          <Pressable style={styles.button} onPress={() => setVisible(true)}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
      <TransactionPin visible={visible} setFalse={() => setVisible(false)} />
    </SafeArea>
  );
};

export default TransferSummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 30,
  },
  header: {
    gap: 29,
    paddingVertical: 15,
    paddingHorizontal: 24,
    backgroundColor: '#D0E4FF',
  },
  headerText: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.WorkSemiBold,
    color: '#242424',
    textAlign: 'center',
  },
  body: {
    flex: 2,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 33,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 13,
    backgroundColor: '#ED405C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  bodyCont: {
    gap: 32,
  },
  totalAmount: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.WorkRegular,
    color: '#888C94',
    textAlign: 'center',
  },
  amount: {
    fontFamily: fonts.WorkBold,
    fontSize: 24,
    lineHeight: 28,
    color: '#1B1D1F',
    textAlign: 'center',
  },
  details: {
    paddingVertical: 11,
    paddingLeft: 23,
    paddingRight: 27,
    gap: 8,
  },
  detailsHeader: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: fonts.WorkMedium,
    color: '#273F71',
  },
  detailsBody: {
    gap: 19,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#C7CBCE',
    paddingVertical: 4,
  },
  detailsText: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: fonts.WorkRegular,
    color: '#4E4F51',
  },
  total: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: fonts.WorkMedium,
    color: '#343437',
  },
  totalPay: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.WorkMedium,
    color: '#1D1D1F',
  },
  sending: {
    gap: 1,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#C7C3C3',
  },
  name: {
    fontSize: 15,
    fontFamily: fonts.WorkMedium,
    lineHeight: 15,
    color: '#0C0C0D',
  },
  accountNo: {
    color: '#333436',
    fontSize: 16,
    fontFamily: fonts.WorkMedium,
    lineHeight: 16,
  },
});
