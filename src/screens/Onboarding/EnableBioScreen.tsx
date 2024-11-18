import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SafeArea from '../../components/SafeArea';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import {fonts} from '../../constants/fonts';

const EnableBioScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Enable Biometrics</Text>
          <Text style={styles.text}>Setup login with Fingerprints</Text>
        </View>
        <Image source={require('../../assets/fingerprint.png')} />
        <View style={styles.buttonActions}>
          <TouchableOpacity
            style={styles.openAccount}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.openAccountText}>Enable Biometrics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.loginText}>Not Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
};

export default EnableBioScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 28,
  },
  top: {
    paddingHorizontal: 28,
    paddingTop: 46,
    paddingBottom: 22,
    backgroundColor: '#0261E3',
    height: 163,
    justifyContent: 'flex-end',
    width: '100%',
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.AeonikBold,
    color: '#FFFFFF',
  },
  text: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: fonts.AeonikRegular,
    color: '#FFFFFF',
  },
  buttonActions: {
    gap: 14,
    marginHorizontal: 'auto',
    width: '87%',
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
    fontFamily: fonts.AeonikBold,
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
    fontFamily: fonts.AeonikRegular,
    color: '#455A64',
  },
});
