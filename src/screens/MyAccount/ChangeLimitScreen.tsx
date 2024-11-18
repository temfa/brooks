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
import SourceAccount from '../../components/SourceAccount';
import Input from '../../components/Input';

const ChangeLimitScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Back text="Transfer Limit" />
        <View style={styles.body}>
          <View style={styles.bodyForm}>
            <SourceAccount />
            <Input label="Enter Amount limit" type="number-pad" />
          </View>
          <Button buttonText="Update" action={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ChangeLimitScreen;

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
