/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BellSvg from '../../assets/svgs/bellSvg';
import {ScrollView} from 'react-native';
import {fonts} from '../../constants/fonts';
import Balance from '../../components/Balance';
import CompleteKyc from '../../components/CompleteKyc';
import QuickActions from '../../components/QuickActions';
import QuickOptions from '../../components/QuickOptions';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import {getTimeOfDay} from '../../utils/helper';
import HomeSlide from '../../components/HomeSlide';
import Accounts from '../../components/Accounts';

const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [time, setTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTime(getTimeOfDay());
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{flexGrow: 1, paddingBottom: 50}}>
      <View style={styles.containerHeader}>
        <Text style={styles.salute}>{time}, Chris</Text>
        <Pressable onPress={() => navigation.navigate('Notification')}>
          <BellSvg />
        </Pressable>
      </View>
      <Balance action={() => setShowModal(true)} />
      <CompleteKyc />
      <QuickActions />
      <HomeSlide />
      <QuickOptions />
      <Accounts
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 23,
    paddingTop: 17,
    paddingBottom: 36,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salute: {
    fontFamily: fonts.AeonikRegular,
    color: '#242F40',
    fontSize: 16,
    lineHeight: 19,
  },
});
