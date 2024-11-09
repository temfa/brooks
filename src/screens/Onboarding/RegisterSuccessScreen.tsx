import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fonts} from '../../constants/fonts';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';

const RegisterSuccessScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('EnableBio');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/success-check.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Welcome Chris,</Text>
        <Text style={styles.textSub}>
          You have successfully created an account
        </Text>
        <Text style={styles.textSub}>Start saving and transacting!!</Text>
      </View>
    </View>
  );
};

export default RegisterSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 41,
  },
  textContainer: {
    gap: 4,
  },
  textHeader: {
    fontSize: 23,
    lineHeight: 24,
    fontFamily: fonts.WorkBold,
    textAlign: 'center',
    color: '#2E302F',
  },
  textSub: {
    fontFamily: fonts.WorkRegular,
    fontSize: 15,
    lineHeight: 17,
    color: '#606470',
    textAlign: 'center',
  },
});
