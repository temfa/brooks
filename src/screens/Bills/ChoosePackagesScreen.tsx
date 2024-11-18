/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import Package from '../../components/Package';
import {packages} from '../../utils/data';
import {fonts} from '../../constants/fonts';

const ChoosePackagesScreen = () => {
  return (
    <View style={styles.container}>
      <Back text="Choose Packages" />
      <FlatList
        data={packages}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Package
            text={item.text}
            title={item.title}
            link="GetCable"
            params={{title: item.title}}
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
              marginBottom: 33,
            }}
          />
        )}
      />
    </View>
  );
};

export default ChoosePackagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 15,
    gap: 18,
  },
});
