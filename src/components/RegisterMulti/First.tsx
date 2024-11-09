import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from '../Input';

const First = () => {
  return (
    <View style={styles.container}>
      <Input label="Full Name" type="default" />
      <Input label="Email Address" type="email-address" />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    gap: 22,
  },
});
