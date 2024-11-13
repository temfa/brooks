import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Icon, {Icons} from './Icons';
import Accounts from './Accounts';
import {fonts} from '../constants/fonts';

const SourceAccount = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => setVisible(true)}
        style={styles.selectContainer}>
        <Text style={styles.selectText}>Select Source Account</Text>
        <Icon
          type={Icons.Feather}
          name="chevron-down"
          size={20}
          color="#ABADC6"
        />
      </Pressable>
      <Accounts setShowModal={() => setVisible(false)} showModal={visible} />
    </>
  );
};

export default SourceAccount;

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B4B7B9',
    height: 57,
    paddingHorizontal: 22.5,
  },
  selectText: {
    fontSize: 12,
    lineHeight: 12,
    color: '#A1A4A3',
    fontFamily: fonts.WorkRegular,
  },
});
