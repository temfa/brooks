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
import Modals from '../../components/Modals';
import {formatter, getTimeOfDay} from '../../utils/helper';
import HomeSlide from '../../components/HomeSlide';

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
  const account = [
    {
      accountNo: '2120456781',
      balance: 35000,
      accountName: 'Chris Mboho ',
      status: 'Active',
      isPrimary: true,
    },
    {
      accountNo: '5334204567',
      balance: 0,
      accountName: 'Chris Mboho ',
      status: 'Active',
      isPrimary: false,
    },
  ];

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
      <Modals
        visible={showModal}
        setFalse={() => setShowModal(false)}
        points={[25]}>
        <View style={styles.modalContainer}>
          {account?.map((item, index) => {
            return (
              <View
                style={
                  item.isPrimary
                    ? [{...styles.modalSingle}, {backgroundColor: '#0557B6'}]
                    : styles.modalSingle
                }
                key={index}>
                <View style={styles.row}>
                  <Text
                    style={[
                      {...styles.accountNo},
                      {color: item.isPrimary ? '#fff' : '#1D1D1F'},
                    ]}>
                    {item.accountNo}
                  </Text>
                  <Text
                    style={[
                      {...styles.accountNo},
                      {
                        color: item.isPrimary ? '#fff' : '#1D1D1F',
                        fontFamily: fonts.WorkSemiBold,
                      },
                    ]}>
                    {formatter(item.balance)}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text
                    style={[
                      {...styles.accountName},
                      {
                        color: item.isPrimary ? '#fff' : '#7D7F88',
                      },
                    ]}>
                    {item.accountName}
                  </Text>
                  <Text
                    style={[
                      {...styles.accountName},
                      {
                        color: item.isPrimary ? '#fff' : '#7D7F88',
                      },
                    ]}>
                    {item.status}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </Modals>
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
    fontFamily: fonts.WorkMedium,
    color: '#242F40',
    fontSize: 16,
    lineHeight: 18.77,
  },
  modalContainer: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 38,
    gap: 16,
  },
  modalSingle: {
    gap: 5,
    borderRadius: 15,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountNo: {
    fontSize: 18,
    fontFamily: fonts.WorkRegular,
    lineHeight: 18,
  },
  accountName: {
    fontFamily: fonts.WorkRegular,
    fontSize: 10,
    lineHeight: 10,
  },
});
