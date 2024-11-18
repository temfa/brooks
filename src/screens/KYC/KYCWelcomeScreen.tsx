/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon, {Icons} from '../../components/Icons';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import DocSvg from '../../assets/svgs/doc';
import {fonts} from '../../constants/fonts';
import BasicSvg from '../../assets/svgs/basic';
import CaretRightSvg from '../../assets/svgs/caretRight';
import UploadSvg from '../../assets/svgs/upload';
import KinSvg from '../../assets/svgs/kin';
import BankSvg from '../../assets/svgs/bank';

const KYCWelcomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            type={Icons.AntDesign}
            name="arrowleft"
            size={24}
            color="#000000"
          />
        </Pressable>
        <View style={styles.header}>
          <DocSvg />
          <View style={styles.headerText}>
            <Text style={styles.title}>Update Profile</Text>
            <Text style={styles.text}>
              For Securities reasons it is important to verify yourself by
              giving us the details below;
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Pressable
          onPress={() => navigation.navigate('BasicInfo')}
          style={styles.row}>
          <View style={styles.left}>
            <BasicSvg />
            <Text style={styles.leftTitle}>Basic Information</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.status}>Pending</Text>
            <CaretRightSvg />
          </View>
        </Pressable>
        <Pressable
          style={{gap: 3}}
          onPress={() => navigation.navigate('UploadDoc')}>
          <View style={styles.row}>
            <View style={styles.left}>
              <UploadSvg />
              <Text style={styles.leftTitle}>Upload Documents</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.status}>Pending 0 / 4</Text>
              <CaretRightSvg />
            </View>
          </View>
          <Text style={styles.subText}>
            Valid means of Identity, Valid Utility, Selfie Picture, Photo of
            Signature)
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('NextKin')}
          style={styles.row}>
          <View style={styles.left}>
            <KinSvg />
            <Text style={styles.leftTitle}>Next of KIN </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.status}>Pending</Text>
            <CaretRightSvg />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('BankInfo')}
          style={styles.row}>
          <View style={styles.left}>
            <BankSvg />
            <Text style={styles.leftTitle}>Banking Information</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.status}>Pending</Text>
            <CaretRightSvg />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default KYCWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 41,
  },
  top: {
    gap: 20,
  },
  header: {
    gap: 20,
  },
  headerText: {
    gap: 6,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.WorkSemiBold,
    lineHeight: 30,
    color: '#000000',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.WorkRegular,
    color: '#616163',
  },
  bottom: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#DBDFE4',
    borderTopWidth: 0.5,
    paddingTop: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  leftTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: fonts.WorkRegular,
    color: '#161515',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  status: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 100,
    backgroundColor: '#C40002',
    fontSize: 10,
    lineHeight: 16,
    color: '#FFFFFF',
    fontFamily: fonts.WorkRegular,
  },
  subText: {
    width: 223,
    fontSize: 12,
    lineHeight: 14,
    color: '#464D58',
  },
});
