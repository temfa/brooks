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
import React from 'react';
import SafeArea from '../../components/SafeArea';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import Icon, {Icons} from '../../components/Icons';
import {fonts} from '../../constants/fonts';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';

const LoginScreen = ({
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
          <View style={styles.top}>
            <View style={styles.header}>
              <View style={styles.navigation}>
                <Pressable onPress={() => navigation.goBack()}>
                  <Icon
                    type={Icons.AntDesign}
                    name="arrowleft"
                    size={24}
                    color="#000000"
                  />
                </Pressable>
              </View>
              <View style={styles.headerCaptions}>
                <Text style={styles.headerTitle}>Login</Text>
                <Text style={styles.headerText}>
                  Input your details below to continue
                </Text>
              </View>
            </View>
            <View style={styles.body}>
              <View style={styles.bodyTop}>
                <Input label="Account Number" type="number-pad" />
                <View style={styles.bodyDown}>
                  <PasswordInput label="Password" />
                  <View style={styles.others}>
                    <Pressable>
                      <Text style={styles.finger}>Login with Fingerprint</Text>
                    </Pressable>
                    <Pressable>
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

                <Text style={styles.already}>
                  Already have an account?{' '}
                  <Text
                    style={{
                      fontFamily: fonts.WorkSemiBold,
                      color: '#E7375B',
                    }}>
                    Log in
                  </Text>
                </Text>
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
  header: {
    height: 127,
    backgroundColor: '#D0E4FF',
    paddingHorizontal: 24,
    gap: 21,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerCaptions: {
    gap: 6,
  },
  headerTitle: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 24,
    lineHeight: 30.19,
    color: '#242424',
  },
  headerText: {
    fontSize: 13,
    fontFamily: fonts.WorkRegular,
    lineHeight: 15.25,
    color: '#394455',
    width: 315,
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
    fontSize: 13,
    fontFamily: fonts.WorkRegular,
    lineHeight: 15,
    color: '#455A64',
  },
  forgot: {
    flex: 0,
    fontSize: 13,
    fontFamily: fonts.WorkMedium,
    lineHeight: 15,
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
    // color: '#818587',
    color: 'white',
    fontSize: 16,
  },
  already: {
    fontSize: 16,
    fontFamily: fonts.WorkRegular,
    lineHeight: 18.77,
    color: '#67686B',
  },
});
