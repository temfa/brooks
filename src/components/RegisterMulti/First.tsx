import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from '../Input';
import PhoneNumber from '../PhoneNumber';

const First = () => {
  return (
    <View style={styles.container}>
      <Input label="Full Name" type="default" />
      <Input label="Email Address" type="email-address" />
      <PhoneNumber />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    gap: 22,
  },
});
