/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import {FlatList} from 'react-native';
import {transBeneData} from '../../utils/data';
import SingleTransferBene from '../../components/SingleTransferBene';
import Icon, {Icons} from '../../components/Icons';
import {TextInput} from 'react-native';
import {fonts} from '../../constants/fonts';

const TransferBeneScreen = () => {
  return (
    <View style={styles.container}>
      <Back text="Transfer Beneficiaries" />
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
          data={transBeneData}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <SingleTransferBene
              name={item.name}
              account={item.account}
              bank={item.bank}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginBottom: 28,
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TransferBeneScreen;

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
});
