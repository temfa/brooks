import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Back from '../../components/Back';
import SourceAccount from '../../components/SourceAccount';
import Input from '../../components/Input';
import {fonts} from '../../constants/fonts';
import Users from '../../assets/svgs/users';
import {Switch} from 'react-native-paper';
import Select from '../../components/Select';

const GetDataScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Back
          text="Buy Data Bundle"
          subText="Enter & select details to continue"
        />
        <View style={styles.body}>
          <SourceAccount />
          <Select
            label="Data Plans"
            header="Choose Data Plan"
            search={false}
            data={[]}
          />
          <View style={styles.details}>
            <Input label="Enter Beneficiary Account" type="number-pad" />
            <View style={styles.beneficiary}>
              <Pressable>
                <Text style={styles.select}>Select Beneficiaries</Text>
              </Pressable>
            </View>
          </View>
          <Input label="Amount" type="number-pad" />
          <View style={styles.addTo}>
            <View style={styles.addToIcon}>
              <Users />
              <Text style={styles.addToText}>Add to Beneficiary</Text>
            </View>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
          <Pressable
            style={styles.button}
            // onPress={() => navigation.navigate('TransferSummary')}
          >
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default GetDataScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: 'white',
    gap: 26,
  },
  body: {
    gap: 21,
  },
  details: {
    gap: 7,
  },
  beneficiary: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  select: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: fonts.WorkRegular,
    color: '#ED405C',
  },
  addTo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: 16,
    backgroundColor: '#CAE1FFE3',
    borderRadius: 10,
  },
  addToIcon: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  addToText: {
    fontFamily: fonts.WorkRegular,
    fontSize: 16,
    lineHeight: 18,
    color: '#353639',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 13,
    backgroundColor: '#CDCDCD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
});
