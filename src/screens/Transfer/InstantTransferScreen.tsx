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
import Input from '../../components/Input';
import Select from '../../components/Select';
import {fonts} from '../../constants/fonts';
import Users from '../../assets/svgs/users';
import {Switch} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/type';
import SourceAccount from '../../components/SourceAccount';

const InstantTransferScreen = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Back text="Instant Transfer" />
        <View style={styles.body}>
          <View style={styles.bodyForm}>
            <SourceAccount />
            <Select
              label="Select Beneficiary Bank "
              header="Select Bank"
              search={true}
              data={[
                'Zenith',
                'Access Bank',
                'Moniepoint',
                'Stanbic IBTC',
                'Guaranty Trust Bank',
                'Wema Bank',
              ]}
            />
            <View style={styles.details}>
              <Input label="Enter Beneficiary Account" type="number-pad" />
              <View style={styles.beneficiary}>
                <Text style={styles.name}>Abule Ayube</Text>
                <Pressable>
                  <Text style={styles.select}>Select Beneficiaries</Text>
                </Pressable>
              </View>
            </View>
            <Input label="Amount" type="number-pad" />
            <Input label="Transaction Narration" type="default" />
            <View style={styles.addTo}>
              <View style={styles.addToIcon}>
                <Users />
                <Text style={styles.addToText}>Add to Beneficiary</Text>
              </View>
              <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('TransferSummary')}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default InstantTransferScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: 'white',
    gap: 26,
  },
  body: {
    gap: 48,
  },

  bodyForm: {
    gap: 17,
  },
  details: {
    gap: 7,
  },
  beneficiary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.WorkMedium,
    fontSize: 14,
    lineHeight: 16,
    color: '#1F2021',
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
