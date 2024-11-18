/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../constants/fonts';
import Otp from '../Otp';

const Second = () => {
  return (
    <View style={styles.container}>
      <Otp data={[1, 2, 3, 4, 5, 6]} />
      <Text style={styles.otp}>
        OTP Expires{' '}
        <Text
          style={{
            color: '#2C85FC',
          }}>
          1:01
        </Text>
      </Text>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 14,
  },
  otp: {
    fontFamily: fonts.SatoshiMedium,
    fontSize: 12,
    lineHeight: 16.2,
    color: '#6D6F71',
  },
});
