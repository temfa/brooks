/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import AirtimeSingle from '../../components/AirtimeSingle';
import {FlatList} from 'react-native';
import {myAccountData} from '../../utils/data';

const MyAccountWelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Back text="Account Settings" />
      <View style={{paddingBottom: 200}}>
        <FlatList
          data={myAccountData}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <AirtimeSingle
              title={item.title}
              link={item.link}
              icon={item.icon}
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

export default MyAccountWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 35,
  },
});
