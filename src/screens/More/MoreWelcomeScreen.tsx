/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeArea from '../../components/SafeArea';
import {fonts} from '../../constants/fonts';
import {moreData} from '../../utils/data';
import AirtimeSingle from '../../components/AirtimeSingle';

const MoreWelcomeScreen = () => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.title}>Chris Mboho</Text>
          <Text style={styles.text}>2221342562 I 2789200203</Text>
        </View>
        <View style={{paddingHorizontal: 24, paddingBottom: 150}}>
          <FlatList
            data={moreData}
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
    </SafeArea>
  );
};

export default MoreWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 22,
  },
  containerHeader: {
    height: 112,
    backgroundColor: '#D0E4FF',
    paddingTop: 44,
    paddingBottom: 28,
    paddingLeft: 28,
    gap: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    color: '#2E2C2C',
    fontFamily: fonts.WorkSemiBold,
  },
  text: {
    fontSize: 15,
    lineHeight: 17,
    color: '#6A6A6A',
    fontFamily: fonts.WorkLight,
  },
});
