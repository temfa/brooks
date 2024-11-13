/* eslint-disable react-native/no-inline-styles */
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../Input';
import Select from '../Select';
import CheckBox from '@react-native-community/checkbox';
import {fonts} from '../../constants/fonts';
import Icon, {Icons} from '../Icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Third = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [calender, setCalender] = useState(false);
  return (
    <ScrollView style={{height: '70%'}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Input label="BVN" type="numeric" />
        <Select
          label="Type of Account"
          header="Select account type"
          search={false}
          data={['Savings', 'Current']}
        />
        <View style={styles.double}>
          <Pressable
            onPress={() => setCalender(true)}
            style={styles.selectContainer}>
            <Text style={styles.selectText}>Date of Birth</Text>
            <Icon
              type={Icons.AntDesign}
              name="calendar"
              size={20}
              color="#ABADC6"
            />
          </Pressable>
          <View style={{width: '45%'}}>
            <Select
              label="Gender"
              header="Select Gender"
              search={false}
              data={['Savings', 'Current']}
            />
          </View>
        </View>
        <Select
          label="State"
          header="Select State"
          search={true}
          data={['Lagos', 'Edo', 'Enugu', 'Abuja', 'Kaduna', 'Delta']}
        />
        <Select
          label="City"
          header="Select City"
          search={true}
          data={['Lagos', 'Edo', 'Enugu', 'Abuja', 'Kaduna', 'Delta']}
        />
        <Input label="Residential Address" type="default" />
        <Input label="Postal Code" type="numeric" />
        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColor={'#64A4FA'}
            tintColors={{true: '#64A4FA'}}
            boxType="square"
            onCheckColor={'#64A4FA'}
          />
          <Text style={styles.checkboxText}>
            I confirm the information provided is correct and i agree to the
            terms and conditions
          </Text>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={calender}
        mode="date"
        isDarkModeEnabled
        onConfirm={(date: any) => {
          //   setDay(date);
          console.log(date);
          setCalender(false);
        }}
        onCancel={() => setCalender(false)}
      />
    </ScrollView>
  );
};

export default Third;

const styles = StyleSheet.create({
  container: {
    gap: 22,
  },
  double: {
    flexDirection: 'row',
    gap: 22,
    width: '100%',
  },
  selectContainer: {
    flexDirection: 'row',
    width: '48%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B4B7B9',
    paddingVertical: 22.5,
    paddingHorizontal: 22.5,
  },
  selectText: {
    fontSize: 12,
    lineHeight: 12,
    color: '#A1A4A3',
    fontFamily: fonts.WorkRegular,
  },
  checkbox: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 11,
    lineHeight: 13,
    width: 251,
    fontFamily: fonts.WorkRegular,
    color: '#C2C3C6',
  },
});
