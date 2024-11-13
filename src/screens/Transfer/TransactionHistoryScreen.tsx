/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../constants/fonts';
import {transactionHistory} from '../../utils/data';
import NoTransaction from '../../components/NoTransaction';
import DownloadSvg from '../../assets/svgs/download';
import FilterSvg from '../../assets/svgs/filter';
import SingleTransaction from '../../components/SingleTransaction';
import Back from '../../components/Back';

const TransactionHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Back text="Transaction History" />
      {transactionHistory?.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
          <NoTransaction />
        </View>
      ) : (
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <View style={styles.filter}>
              <Text style={styles.filterText}>Filter</Text>
              <FilterSvg />
            </View>
            <DownloadSvg />
          </View>
          <FlatList
            data={transactionHistory}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <SingleTransaction
                transactionType="Transfer"
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
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginBottom: 22,
                }}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    gap: 26,
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 77,
  },
  body: {
    gap: 17,
  },
  bodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filter: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: '#D7D7DB',
    borderRadius: 12,
  },
  filterText: {
    fontSize: 16,
    fontFamily: fonts.WorkRegular,
    lineHeight: 24,
    color: '#323233',
  },
});
