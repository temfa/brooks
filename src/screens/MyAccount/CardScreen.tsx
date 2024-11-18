import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Back from '../../components/Back';
import {Switch} from 'react-native';
import {fonts} from '../../constants/fonts';

const CardScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.container}>
      <Back text="Debit Card" />
      <View style={styles.body}>
        <Image source={require('../../assets/credit-card.png')} />
        <View style={styles.action}>
          <View style={styles.row}>
            <Text style={styles.name}>Chris Mboho</Text>
            <Text style={styles.account}>22161xxxx56</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.active}>Active</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 43,
    gap: 30,
  },
  body: {
    gap: 22,
  },
  action: {
    gap: 4,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 12,
    borderBottomColor: '#DDDCDC',
    borderBottomWidth: 0.5,
  },
  name: {
    fontFamily: fonts.WorkRegular,
    fontSize: 15,
    lineHeight: 15,
    color: '#989CA1',
  },
  account: {
    fontFamily: fonts.WorkMedium,
    fontSize: 16,
    lineHeight: 16,
    color: '#1D1D1F',
  },
  active: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 16,
    lineHeight: 19,
    color: '##353639',
  },
});
