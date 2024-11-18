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
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import SafeArea from '../../components/SafeArea';
import Icon, {Icons} from '../../components/Icons';
import {fonts} from '../../constants/fonts';
import {registerHeaderText} from '../../utils/data';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
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
                    color="#fff"
                  />
                </Pressable>
                <Text
                  style={[{...styles.step}, {fontFamily: fonts.AeonikLight}]}>
                  Step{' '}
                  <Text style={{fontFamily: fonts.AeonikBold}}>{active}</Text>
                  <Text style={{fontFamily: fonts.AeonikBold, fontSize: 14}}>
                    /4
                  </Text>
                </Text>
                {/* <CircularStepIndicator step={active} totalSteps={4} /> */}
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
                    fontFamily: fonts.SatoshiMedium,
                    color: '#0261E3',
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
                {active === 4 ? 'Proceed' : active === 2 ? 'Verify' : 'Next'}
              </Text>
            </TouchableOpacity>
            {active === 1 && (
              <View style={styles.alreadyContainer}>
                <Text style={styles.already}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={[
                      {...styles.already},
                      {
                        fontFamily: fonts.AeonikBold,
                        color: '#E7375B',
                      },
                    ]}>
                    Log in
                  </Text>
                </Pressable>
              </View>
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
    backgroundColor: '#0261E3',
    paddingHorizontal: 24,
    gap: 21,
    paddingTop: 13,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  step: {
    fontSize: 16,
    lineHeight: 16,
    color: '#fff',
    fontFamily: fonts.AeonikBold,
  },
  headerCaptions: {
    gap: 6,
  },
  headerTitle: {
    fontFamily: fonts.AeonikBold,
    fontSize: 24,
    lineHeight: 30.19,
    color: '#fff',
  },
  headerText: {
    fontSize: 14,
    fontFamily: fonts.SatoshiRegular,
    lineHeight: 19,
    color: '#fff',
    width: 319,
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
  },
  otp: {
    fontSize: 14,
    fontFamily: fonts.SatoshiRegular,
    lineHeight: 16.42,
    color: '#606470',
  },
  bottomText: {
    // color: '#818587',
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
