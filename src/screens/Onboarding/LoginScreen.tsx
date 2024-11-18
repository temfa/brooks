/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeArea from '../../components/SafeArea';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import {fonts} from '../../constants/fonts';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import {checkBiometrics, simplePrompt} from '../../utils/BiometricsUtils';
import SafeBack from '../../components/SafeBack';

const LoginScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [biometricType, setBiometricType] = useState<string | null>();
  useEffect(() => {
    checkBiometrics().then(bt => {
      setBiometricType(bt);
    });
  }, []);

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.top}>
            <SafeBack
              headerTitle="Login"
              headerText="Input your details below to continue"
            />
            <View style={styles.body}>
              <View style={styles.bodyTop}>
                <Input label="Account Number" type="number-pad" />
                <View style={styles.bodyDown}>
                  <PasswordInput label="Password" />
                  <View style={styles.others}>
                    <Pressable
                      onPress={() => {
                        simplePrompt().then(success => {
                          if (success) navigation.navigate('Dashboard');
                        });
                      }}>
                      <Text style={styles.finger}>
                        Login with{' '}
                        {biometricType === 'Biometrics'
                          ? 'Fingerprint'
                          : biometricType}
                      </Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Forgot')}>
                      <Text style={styles.forgot}>Forgot Password?</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={styles.bodyActions}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Dashboard')}
                  style={styles.bottomCont}>
                  <Text style={styles.bottomText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.alreadyContainer}>
                  <Text style={styles.already}>Don’t have an account?</Text>
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text
                      style={[
                        {...styles.already},
                        {
                          fontFamily: fonts.AeonikBold,
                          color: '#E7375B',
                        },
                      ]}>
                      Register
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 43,
  },
  top: {
    gap: 21,
  },

  body: {
    paddingHorizontal: 24,
    gap: 83,
    width: '100%',
  },
  bodyTop: {
    gap: 22,
  },
  bodyDown: {
    gap: 10,
    width: '100%',
  },
  others: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  finger: {
    flex: 0,
    fontSize: 14,
    letterSpacing: 0.09,
    fontFamily: fonts.SatoshiMedium,
    lineHeight: 18,
    color: '#455A64',
  },
  forgot: {
    flex: 0,
    fontSize: 14,
    fontFamily: fonts.SatoshiMedium,
    letterSpacing: 0.09,
    lineHeight: 18,
    color: '#E7375B',
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
  alreadyContainer: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  already: {
    fontSize: 16,
    fontFamily: fonts.AeonikRegular,
    lineHeight: 18.77,
    color: '#67686B',
    alignItems: 'center',
  },
});
