/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import {FlatList} from 'react-native';
import {payBeneData} from '../../utils/data';
import Icon, {Icons} from '../../components/Icons';
import {TextInput} from 'react-native';
import {fonts} from '../../constants/fonts';
import Select from '../../components/Select';
import SingleAirtimeBene from '../../components/SingleAirtimeBene';

const PaymentBeneScreen = () => {
  return (
    <View style={styles.container}>
      <Back text="Transfer Beneficiaries" />
      <View style={styles.body}>
        <Select label="Airtime Purchase" header="" search={false} data={[]} />
        <View style={styles.searchContainer}>
          <Icon type={Icons.FontAwesome} name="search" color="#9A9EA1" />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor="#7D7F88"
          />
        </View>
        <View style={{paddingBottom: 200}}>
          <FlatList
            data={payBeneData}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <SingleAirtimeBene
                name={item.name}
                network={item.network}
                number={item.number}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginBottom: 36,
                }}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentBeneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 4,
    backgroundColor: '#F2F2F3',
    borderRadius: 15,
    paddingVertical: 7,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    lineHeight: 15,
    color: '#7D7F88',
    fontFamily: fonts.WorkRegular,
  },
  body: {
    gap: 22,
  },
});
