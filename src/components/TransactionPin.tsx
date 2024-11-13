import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Modals from './Modals';
import {fonts} from '../constants/fonts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../utils/type';
import Otp from './Otp';

type Props = {
  visible: boolean;
  setFalse: () => void;
};

const TransactionPin: FC<Props> = ({visible, setFalse}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Modals visible={visible} setFalse={setFalse} points={[50]}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Transaction Pin</Text>
          <Text style={styles.modalText}>
            To complete this transfer, please enter your 4-digit PIN
          </Text>
        </View>
        <Otp data={[1, 2, 3, 4]} />
        <View style={styles.buttonActions}>
          <TouchableOpacity
            style={styles.openAccount}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.openAccountText}>Send Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login} onPress={setFalse}>
            <Text style={styles.loginText}>Dismiss</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modals>
  );
};

export default TransactionPin;

const styles = StyleSheet.create({
  modalContainer: {
    gap: 18,
    alignItems: 'center',
    paddingHorizontal: 27,
  },
  modalHeader: {
    gap: 7,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 22,
    lineHeight: 26,
    color: '#2B2B2D',
  },
  modalText: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: fonts.WorkRegular,
    color: '#394455',
    textAlign: 'center',
    width: 281,
  },
  buttonActions: {
    gap: 14,
    width: '95%',
  },
  openAccount: {
    width: '100%',
    paddingVertical: 16.5,
    borderRadius: 13,
    backgroundColor: '#C40002',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openAccountText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.WorkBold,
    color: '#fff',
  },
  login: {
    backgroundColor: '#DDDCDC',
    borderRadius: 13.11,
    width: '100%',
    paddingVertical: 16.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.WorkSemiBold,
    color: '#455A64',
  },
});
