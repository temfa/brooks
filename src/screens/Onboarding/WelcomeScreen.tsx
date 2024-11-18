import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fonts} from '../../constants/fonts';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';

const WelcomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Walkthrough');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Brooks</Text>
      <Text style={styles.welcomeText}>Microfinance Bank</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  welcomeTitle: {
    fontFamily: fonts.SyneBold,
    fontSize: 32.29,
    lineHeight: 32.29,
    color: '#F60808',
    textAlign: 'center',
  },
  welcomeText: {
    fontFamily: fonts.SyneSemiBold,
    fontSize: 24,
    lineHeight: 24,
    color: '#01B7E7',
    textAlign: 'center',
  },
});
