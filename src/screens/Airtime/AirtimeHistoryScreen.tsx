/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../constants/fonts';
import Icon, {Icons} from '../../components/Icons';
import FilterSvg from '../../assets/svgs/filter';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import SingleTransaction from '../../components/SingleTransaction';
import {airtimeTransactionHistory} from '../../utils/data';
import NoTransaction from '../../components/NoTransaction';

const AirtimeHistoryScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type={Icons.AntDesign}
            name="arrowleft"
            size={24}
            color="#000000"
          />
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Airtime & Data</Text>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Filter</Text>
            <FilterSvg />
          </View>
        </View>
      </View>
      {airtimeTransactionHistory?.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
          <NoTransaction />
        </View>
      ) : (
        <View>
          <FlatList
            data={airtimeTransactionHistory}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <SingleTransaction
                transactionType="Airtime"
                type={item?.type as 'Credit' | 'Debit'}
                amount={item?.amount}
                date={item?.date}
                name={item?.name}
                beneficiary={item?.beneficiary}
                network={item.network}
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

export default AirtimeHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 15,
    gap: 38,
  },
  containerHeader: {
    gap: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.WorkSemiBold,
    color: '#242424',
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
