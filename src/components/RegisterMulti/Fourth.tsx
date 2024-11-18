import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PasswordInput from '../PasswordInput';
import {fonts} from '../../constants/fonts';

const Fourth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <PasswordInput label="Password" />
        <Text style={styles.firstText}>
          Your password must be 8 or more characters long & contain a mix of
          upper & lower case letters, numbers & symbols.
        </Text>
      </View>
      <PasswordInput label="Confirm Password" />
    </View>
  );
};

export default Fourth;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  first: {
    gap: 4,
  },
  firstText: {
    fontFamily: fonts.SatoshiRegular,
    fontSize: 12,
    lineHeight: 14,
    color: 'black',
  },
});
