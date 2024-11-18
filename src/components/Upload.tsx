/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {fonts} from '../constants/fonts';
import {View} from 'react-native';
import GreenCheckSvg from '../assets/svgs/greenCheck';
import CloseSvg from '../assets/svgs/close';

const Upload = () => {
  const [name, setName] = useState('');
  const selectDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // Specify allowed file types
      });
      console.log(result);
      setName(result[0]?.name as string);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled document selection');
      } else {
        console.error(err);
      }
    }
  };
  return name !== '' ? (
    <View style={styles.container2}>
      <View style={styles.containerLeft}>
        <GreenCheckSvg />
        <Text style={[{...styles.containerText}, {color: '#1C1D1E'}]}>
          {name}
        </Text>
      </View>
      <CloseSvg onPress={() => setName('')} />
    </View>
  ) : (
    <Pressable onPress={selectDocument} style={styles.container}>
      <Text style={styles.containerText}>Click to upload</Text>
    </Pressable>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#C40002',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    height: 57,
  },
  containerText: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: fonts.WorkMedium,
    color: '#C40002',
  },
  container2: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B4B7B9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    alignItems: 'center',
    paddingVertical: 7,
    height: 57,
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
});
