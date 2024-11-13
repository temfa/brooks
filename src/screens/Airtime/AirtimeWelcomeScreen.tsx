/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon, {Icons} from '../../components/Icons';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import HistorySvg from '../../assets/svgs/history';
import {fonts} from '../../constants/fonts';
import AirtimeSingle from '../../components/AirtimeSingle';
import PhoneSvg from '../../assets/svgs/phone';

const AirtimeWelcomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type={Icons.AntDesign}
            name="arrowleft"
            size={24}
            color="#000000"
          />
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Airtime</Text>
          <Pressable
            style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}
            onPress={() => navigation.navigate('AirtimeHistory')}>
            <HistorySvg />
            <Text style={styles.history}>History</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.body}>
        <AirtimeSingle
          title="Buy Airtime"
          icon={<PhoneSvg />}
          link="GetAirtime"
        />
        <AirtimeSingle title="Buy Data" icon={<PhoneSvg />} link="GetData" />
      </View>
    </View>
  );
};

export default AirtimeWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 15,
    gap: 39,
  },
  containerHeader: {
    gap: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.WorkSemiBold,
    color: '#242424',
  },
  history: {
    fontSize: 16,
    lineHeight: 19,
    color: '#ED405C',
    fontFamily: fonts.WorkSemiBold,
  },
  body: {
    gap: 22,
  },
});
