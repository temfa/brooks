import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon, {Icons} from './Icons';
import {fonts} from '../constants/fonts';

const PasswordInput = ({label}: {label: string}) => {
  const [active, setActive] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>{label}</Text>
      <View style={styles.containerHeader}>
        <TextInput
          keyboardType={active ? 'default' : 'visible-password'}
          placeholder="XXXXXXXXXXXXXXXX"
          style={styles.textInput}
          placeholderTextColor="#262728"
        />
        <Pressable onPress={() => setActive(!active)}>
          <Icon
            type={Icons.Ionicons}
            name={active ? 'eye' : 'eye-off'}
            size={17}
            color="#A0A3BD"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B4B7B9',
    paddingVertical: 7.02,
    paddingHorizontal: 14.03,
  },
  containerTitle: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.SatoshiMedium,
    color: '#585C60',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textInput: {
    width: '90%',
    fontSize: 14,
    fontFamily: fonts.SatoshiMedium,
    lineHeight: 17.54,
    letterSpacing: 0.09,
    color: '#191A1C',
  },
});
