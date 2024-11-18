/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../constants/fonts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../utils/type';

const CompleteKyc = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topContainer}>
          <View style={[{...styles.position}, {width: '65%'}]} />
        </View>
        <Text style={styles.complete}>65% Complete</Text>
      </View>
      <TouchableOpacity
        style={styles.middle}
        onPress={() => navigation.navigate('Kyc')}>
        <Text style={styles.middleText}>Complete KYC</Text>
      </TouchableOpacity>
      <Text style={styles.bottom}>
        Just a few steps to complete account setup.
      </Text>
    </View>
  );
};

export default CompleteKyc;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 24,
    backgroundColor: '#F3F1EF',
    borderRadius: 10,
    marginTop: 35,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainer: {
    width: 178,
    height: 7,
    borderRadius: 100,
    backgroundColor: '#A0A3BD',
  },
  position: {
    backgroundColor: '#067F5E',
    height: '100%',
    borderRadius: 100,
  },
  complete: {
    fontFamily: fonts.SatoshiMedium,
    fontSize: 12,
    lineHeight: 17,
    color: '#394455',
  },
  middle: {
    backgroundColor: '#F5103F',
    borderRadius: 100,
    paddingVertical: 9.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
  },
  middleText: {
    fontFamily: fonts.SatoshiMedium,
    fontSize: 12,
    lineHeight: 15,
    color: '#FFFFFF',
  },
  bottom: {
    fontFamily: fonts.AeonikRegular,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 16,
    color: '#686161',
  },
});
