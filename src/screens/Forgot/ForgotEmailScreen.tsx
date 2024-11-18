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
import Input from '../../components/Input';
import {fonts} from '../../constants/fonts';

const ForgotEmailScreen = ({
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
            headerTitle="Forgot Password"
            headerText="Input your email to receive OTP"
          />
          <View style={styles.body}>
            <View style={styles.bodyTop}>
              <Input label="Email" type="email-address" />
            </View>
            <View style={styles.bodyActions}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotOtp')}
                style={styles.bottomCont}>
                <Text style={styles.bottomText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default ForgotEmailScreen;

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
