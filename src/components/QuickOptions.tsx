import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContactSvg from '../assets/svgs/contactSvg';
import Icon, {Icons} from './Icons';
import ReferSvg from '../assets/svgs/referSvg';
import {fonts} from '../constants/fonts';

const QuickOptions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quickTitle}>Quick Options</Text>
      <View style={styles.quickOption}>
        <View style={styles.quickSingle}>
          <View style={styles.quickLeft}>
            <ContactSvg />
            <View style={styles.quickTexts}>
              <Text style={styles.quickTextTitle}>Contact Account officer</Text>
              <Text style={styles.quickSubText}>Temitope Esther</Text>
            </View>
          </View>
          <Icon
            type={Icons.Entypo}
            name="chevron-small-right"
            color="#7C7474"
          />
        </View>
        <View style={styles.quickSingle}>
          <View style={styles.quickLeft}>
            <ReferSvg />
            <View style={styles.quickTexts}>
              <Text style={styles.quickTextTitle}>Refer and Earn bonus</Text>
              <Text style={styles.quickSubText}>Tell a friend about Us</Text>
            </View>
          </View>
          <Icon
            type={Icons.Entypo}
            name="chevron-small-right"
            color="#7C7474"
          />
        </View>
      </View>
    </View>
  );
};

export default QuickOptions;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 21,
  },
  quickTitle: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 16,
    lineHeight: 18,
    color: '#272626',
  },
  quickOption: {
    gap: 37,
  },
  quickSingle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quickLeft: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
  },
  quickTexts: {
    gap: 2,
  },
  quickTextTitle: {
    fontSize: 14,
    lineHeight: 16.42,
    fontFamily: fonts.WorkRegular,
    color: '#394455',
  },
  quickSubText: {
    fontFamily: fonts.WorkLight,
    fontSize: 11,
    lineHeight: 11,
    color: '#6B6E73',
  },
});