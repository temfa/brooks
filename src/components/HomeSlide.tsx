import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../constants/fonts';

const HomeSlide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTexts}>
        <Text style={styles.containerTitle}>
          Join a 12months Ajo saving plan starting with
          <Text style={styles.bold}>₦1,000 </Text>
        </Text>
        <TouchableOpacity style={styles.joinContainer}>
          <Text style={styles.joinText}>Join</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/money.png')} />
    </View>
  );
};

export default HomeSlide;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#19191A',
    borderRadius: 10,
    marginTop: 22,
    marginBottom: 31,
  },
  containerTexts: {
    gap: 6,
    width: 198,
  },
  containerTitle: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: fonts.WorkRegular,
    color: '#E0DCDC',
  },
  bold: {
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    fontFamily: fonts.WorkBold,
  },
  joinContainer: {
    backgroundColor: '#FFFBFB',
    borderRadius: 13,
    paddingHorizontal: 7,
    paddingVertical: 1,
    width: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinText: {
    fontSize: 9,
    fontFamily: fonts.WorkRegular,
    lineHeight: 10,
    color: '#191919',
  },
});
