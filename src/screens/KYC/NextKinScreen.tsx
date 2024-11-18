/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Back from '../../components/Back';
import Input from '../../components/Input';
import Select from '../../components/Select';
import {Pressable} from 'react-native';
import Icon, {Icons} from '../../components/Icons';
import {fonts} from '../../constants/fonts';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from '../../components/Button';

const NextKinScreen = () => {
  const [calender, setCalender] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Back text="Next of KIN" />
        <View style={styles.body}>
          <ScrollView
            style={{height: '70%'}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.bodyContainer}>
              <Input label="Full Name" type="default" />
              <Input label="Relationship" type="default" />
              <Input label="Email Address" type="email-address" />

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
          <Button buttonText="Update" action={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default NextKinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 21,
  },
  body: {
    flex: 2,
    justifyContent: 'space-between',
  },
  bodyContainer: {
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
