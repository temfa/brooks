import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TransferBalanceCard from '../../components/TransferBalanceCard';
import TransferActionSvg from '../../assets/svgs/transferActionSvg';
import TransHistorySvg from '../../assets/svgs/transHistory';
import {fonts} from '../../constants/fonts';
import {transactionHistory} from '../../utils/data';
import Icon, {Icons} from '../../components/Icons';
import SingleTransaction from '../../components/SingleTransaction';
import NoTransaction from '../../components/NoTransaction';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';

const TransferScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const data = transactionHistory.filter(item => {
    return item.name === 'Transfer';
  });
  return (
    <View style={styles.container}>
      <TransferBalanceCard />
      <View style={styles.transferAction}>
        <TouchableOpacity
          style={styles.transfer}
          onPress={() => navigation.navigate('InstantTransfer')}>
          <TransferActionSvg />
          <Text style={styles.transferText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.history}
          onPress={() => navigation.navigate('TransactionHistory')}>
          <TransHistorySvg />
          <Text style={styles.historyText}>Transaction History</Text>
        </TouchableOpacity>
      </View>
      {data?.length === 0 ? (
        <NoTransaction />
      ) : (
        <View style={styles.recent}>
          <View style={styles.recentHead}>
            <Text style={styles.recentTitle}>Recent Transactions</Text>
            <Pressable style={styles.recentAll}>
              <Text
                style={styles.recentSeeAll}
                onPress={() => navigation.navigate('TransactionHistory')}>
                View All
              </Text>
              <Icon
                type={Icons.Entypo}
                name="chevron-small-right"
                size={15}
                color="#E7375B"
              />
            </Pressable>
          </View>
          <View style={styles.recentBody}>
            {data?.splice(0, 3)?.map((item, index) => {
              return (
                <SingleTransaction
                  transactionType="Transfer"
                  key={index}
                  type={item?.type as 'Credit' | 'Debit'}
                  amount={item?.amount}
                  date={item?.date}
                  name={item?.name}
                  beneficiary={item?.beneficiary}
                  beneficiaryTitle={
                    item?.type === 'Credit' ? 'Sender' : 'Beneficiary'
                  }
                  status={item?.status as 'Successful' | 'Failed'}
                />
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  transferAction: {
    marginTop: 31,
    gap: 14,
    marginBottom: 65,
  },
  transfer: {
    backgroundColor: '#C40002',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 4,
  },
  transferText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.WorkSemiBold,
    color: 'white',
  },
  history: {
    backgroundColor: '#DDDCDC',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    flexDirection: 'row',
    gap: 4,
  },
  historyText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.WorkRegular,
    color: '#455A64',
  },
  recent: {
    gap: 12,
  },
  recentHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentTitle: {
    fontSize: 17,
    lineHeight: 20,
    color: '#394455',
    fontFamily: fonts.WorkSemiBold,
  },
  recentAll: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  recentSeeAll: {
    fontSize: 13,
    lineHeight: 15,
    fontFamily: fonts.WorkMedium,
    color: '#ED405C',
  },
  recentBody: {
    gap: 22,
  },
});
