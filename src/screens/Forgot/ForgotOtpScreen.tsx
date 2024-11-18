/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import SafeBack from '../../components/SafeBack';
import SafeArea from '../../components/SafeArea';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import {fonts} from '../../constants/fonts';
import Otp from '../../components/Otp';

const ForgotOtpScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <SafeBack
            headerTitle="Enter OTP"
            headerText="Please enter the 6-digit code sent to your email address benose4***@gmail.com"
          />
          <View style={styles.body}>
            <View style={styles.otpContainer}>
              <Otp data={[1, 2, 3, 4, 5, 6]} />
              <Text style={styles.otps}>
                OTP Expires{' '}
                <Text
                  style={{
                    color: '#2C85FC',
                  }}>
                  1:01
                </Text>
              </Text>
            </View>
            <View style={styles.bodyActions}>
              <Text style={styles.otp}>
                Didn’t receive the code?{' '}
                <Text
                  style={{
                    fontFamily: fonts.SatoshiMedium,
                    color: '#0261E3',
                  }}>
                  Resend Code
                </Text>
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotNew')}
                style={styles.bottomCont}>
                <Text style={styles.bottomText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default ForgotOtpScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 43,
    gap: 34,
  },

  body: {
    paddingHorizontal: 24,
    flex: 2,
    justifyContent: 'space-between',
    width: '100%',
  },
  bodyTop: {
    gap: 22,
  },

  bodyActions: {
    alignItems: 'center',
    gap: 12,
  },
  otpContainer: {
    alignItems: 'center',
    gap: 14,
  },
  otps: {
    fontFamily: fonts.SatoshiMedium,
    fontSize: 12,
    lineHeight: 16.2,
    color: '#6D6F71',
  },

  otp: {
    fontSize: 14,
    fontFamily: fonts.SatoshiRegular,
    lineHeight: 16.42,
    color: '#606470',
  },
  bottomCont: {
    borderRadius: 13,
    // backgroundColor: '#DDDCDC',
    backgroundColor: '#E7375B',
    paddingVertical: 13.11,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  bottomText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 16,
    fontFamily: fonts.AeonikRegular,
  },
});
