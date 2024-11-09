import {ImageBackground, StyleSheet, Text, View} from 'react-native';
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
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.welcomeBackground}
        source={require('../../assets/welcome-background.png')}
        resizeMode="stretch">
        <Text style={styles.welcomeTitle}>Brooks</Text>
        <Text style={styles.welcomeText}>Microfinance Bank</Text>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#263238',
  },

  welcomeBackground: {
    alignItems: 'center',
    justifyContent: 'center',
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
