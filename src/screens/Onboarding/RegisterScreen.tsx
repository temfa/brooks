/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SafeArea from '../../components/SafeArea';
import Icon, {Icons} from '../../components/Icons';
import CircularStepIndicator from '../../components/StepIndicator';
import {fonts} from '../../constants/fonts';
import {registerHeaderText} from '../../utils/data';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import {TouchableWithoutFeedback} from 'react-native';
import First from '../../components/RegisterMulti/First';
import Second from '../../components/RegisterMulti/Second';
import Third from '../../components/RegisterMulti/Third';
import Fourth from '../../components/RegisterMulti/Fourth';

const RegisterScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [active, setActive] = useState(1);

  const loadOptions = () => {
    switch (active) {
      case 1:
        return <First />;

      case 2:
        return <Second />;

      case 3:
        return <Third />;

      case 4:
        return <Fourth />;

      default:
        <First />;
        break;
    }
  };

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.top}>
            <View style={styles.header}>
              <View style={styles.navigation}>
                <Pressable
                  onPress={() =>
                    active === 1 ? navigation.goBack() : setActive(active - 1)
                  }>
                  <Icon
                    type={Icons.AntDesign}
                    name="arrowleft"
                    size={24}
                    color="#000000"
                  />
                </Pressable>
                <CircularStepIndicator step={active} totalSteps={4} />
              </View>
              <View style={styles.headerCaptions}>
                <Text style={styles.headerTitle}>
                  {registerHeaderText[active - 1].title}
                </Text>
                <Text style={styles.headerText}>
                  {registerHeaderText[active - 1].text}
                </Text>
              </View>
            </View>
            <View style={styles.body}>{loadOptions()}</View>
          </View>
          <View style={styles.bottom}>
            {active === 2 && (
              <Text style={styles.otp}>
                Didn’t receive the code?{' '}
                <Text
                  style={{
                    fontFamily: fonts.WorkMedium,
                    color: '#1B7AFC',
                  }}>
                  Resend Code
                </Text>
              </Text>
            )}
            <TouchableOpacity
              onPress={() =>
                active === 4
                  ? navigation.navigate('RegisterSuccess')
                  : setActive(active + 1)
              }
              style={styles.bottomCont}>
              <Text style={styles.bottomText}>
                {active === 4 ? 'Proceed' : active === 2 ? 'Submit' : 'Next'}
              </Text>
            </TouchableOpacity>
            {active === 1 && (
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
            )}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default RegisterScreen;

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
    height: 155,
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
  },
  bottom: {
    alignItems: 'center',
    gap: 14,
    marginHorizontal: 24,
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
  otp: {
    fontSize: 14,
    fontFamily: fonts.WorkRegular,
    lineHeight: 16.42,
    color: '#606470',
    marginBottom: 15,
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
