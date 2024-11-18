import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Back from '../../components/Back';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import {Text} from 'react-native';
import {fonts} from '../../constants/fonts';
import TransactionPin from '../../components/TransactionPin';

const ChangePasswordScreen = () => {
  const [active, setActive] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Back text="Change Password" />
        <View style={styles.body}>
          <View style={styles.bodyForm}>
            <PasswordInput label="Old Password" />
            <View style={styles.first}>
              <PasswordInput label="New Password" />
              <Text style={styles.firstText}>
                Your password must be 8 or more characters long & contain a mix
                of upper & lower case letters, numbers & symbols.
              </Text>
            </View>
            <PasswordInput label="Confirm New Password" />
          </View>
          <Button buttonText="Confirm" action={() => {}} />
        </View>
        <TransactionPin visible={active} setFalse={() => setActive(false)} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ChangePasswordScreen;

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
    gap: 23,
  },
  first: {
    gap: 4,
  },
  firstText: {
    fontFamily: fonts.WorkRegular,
    fontSize: 12,
    lineHeight: 14,
    color: 'black',
  },
});
