import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Back from '../../components/Back';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

const BankInfoScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Back text="Banking Information" />
        <View style={styles.body}>
          <View style={styles.bodyForm}>
            <Input label="BVN" type="numeric" />
            <Select
              label="Select Debit Card Preference"
              header=""
              search={false}
              data={[]}
            />
            <Select
              label="Transaction alert Preference"
              header=""
              search={false}
              data={[]}
            />
            <Select
              label="Internet Banking Preference"
              header=""
              search={false}
              data={[]}
            />
          </View>
          <Button buttonText="Update" action={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default BankInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 21,
  },
  body: {
    flex: 2,
    justifyContent: 'space-between',
  },
  bodyForm: {
    gap: 21,
  },
});
