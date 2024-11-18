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
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';

const MyPinScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Back
          text="Set transaction PIN "
          subText="Enter a 4-didgit code you won’t forget"
        />
        <View style={styles.body}>
          <View style={styles.bodyForm}>
            <PasswordInput label="New Pin" />
            <PasswordInput label="Confirm New Pin" />
          </View>
          <Button buttonText="Confirm" action={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default MyPinScreen;

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
});
