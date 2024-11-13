import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import Back from '../../components/Back';
import Input from '../../components/Input';
import {fonts} from '../../constants/fonts';
import Button from '../../components/Button';
import TransactionPin from '../../components/TransactionPin';

const GetElectricityScreen = () => {
  const items =
    useRoute<RouteProp<RootStackParamList, 'GetElectricity'>>().params;
  console.log(items);
  const [visible, setVisible] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Back text="Bill Payment" subText="Enter Meter Number" />
        <View style={styles.body}>
          <Input label="Enter Meter Number" type="numeric" />
          <View style={styles.single}>
            <Text style={styles.text}>Name</Text>
            <Text style={styles.title}>Chris Mboho</Text>
          </View>
          <View style={styles.single}>
            <Text style={styles.text}>Phone Number</Text>
            <Text style={styles.title}>08107861046</Text>
          </View>
          <View style={styles.single}>
            <Text style={styles.text}>Address</Text>
            <Text style={styles.title}>12, Ade Alabi street, Ajah</Text>
          </View>
          <Input label="Amount" type="number-pad" />
          <Button buttonText="Continue" action={() => setVisible(true)} />
        </View>
        <TransactionPin visible={visible} setFalse={() => setVisible(false)} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default GetElectricityScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: 'white',
    gap: 27,
  },
  body: {
    gap: 26,
  },
  single: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#A8B4BC',
    gap: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
    color: '#696A6A',
    fontFamily: fonts.WorkRegular,
  },
  title: {
    fontFamily: fonts.WorkMedium,
    fontSize: 16,
    lineHeight: 16,
    color: '#1D1D1F',
  },
});
