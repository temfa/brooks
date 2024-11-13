/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import {electrictyDistribution} from '../../utils/data';
import AirtimeSingle from '../../components/AirtimeSingle';
import {fonts} from '../../constants/fonts';

const BillsProviderElectScreen = () => {
  return (
    <View style={styles.container}>
      <Back
        text="Bill Provider"
        subText="Select the provider you want to buy from"
      />
      <FlatList
        data={electrictyDistribution}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <AirtimeSingle
            title={item.title}
            link="GetElectricity"
            params={item.title}
            icon={
              <View
                style={{
                  width: 32.5,
                  height: 32.5,
                  borderRadius: 16.25,
                  backgroundColor: '#CAE1FF',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.WorkSemiBold,
                    fontSize: 11,
                    lineHeight: 16,
                    color: '#1877F2',
                  }}>
                  ED
                </Text>
              </View>
            }
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
  );
};

export default BillsProviderElectScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: 'white',
    gap: 34,
  },
});
