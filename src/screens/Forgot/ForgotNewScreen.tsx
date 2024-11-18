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
import PasswordInput from '../../components/PasswordInput';

const ForgotNewScreen = ({
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
            headerTitle="New Password"
            headerText="Enter new password here"
          />
          <View style={styles.body}>
            <View style={styles.bodyTop}>
              <View style={styles.first}>
                <PasswordInput label="Password" />
                <Text style={styles.firstText}>
                  Your password must be 8 or more characters long & contain a
                  mix of upper & lower case letters, numbers & symbols.
                </Text>
              </View>
              <PasswordInput label="Confirm Password" />
            </View>
            <View style={styles.bodyActions}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
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

export default ForgotNewScreen;

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
    gap: 24,
  },
  first: {
    gap: 4,
  },
  firstText: {
    fontFamily: fonts.SatoshiRegular,
    fontSize: 12,
    lineHeight: 14,
    color: 'black',
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
