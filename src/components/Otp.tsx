import {StyleSheet, TextInput, View} from 'react-native';
import React, {FC, RefObject, useRef, useState} from 'react';
import {fonts} from '../constants/fonts';

type Props = {
  data: number[];
};

const Otp: FC<Props> = ({data}) => {
  const [codes, setCodes] = useState<string[] | undefined>(Array(6).fill(''));
  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      const newCodes = text.split('');
      setCodes(newCodes);
      refs[5]!.current?.focus();
      return;
    }
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes);
    if (text !== '' && index < 5) {
      refs[index + 1]!.current?.focus();
    }
  };
  return (
    <View style={styles.inputContainer}>
      {data?.map((_, index) => {
        return (
          <TextInput
            key={index}
            style={styles.inputTexts}
            textAlign="center"
            autoComplete="one-time-code"
            ref={refs[index]}
            maxLength={1}
            keyboardType="number-pad"
            focusable={true}
            onChangeText={text => onChangeCode(text, index)}
            onKeyPress={({nativeEvent: {key}}) => {
              if (key === 'Backspace' && index > 0) {
                onChangeCode('', index - 1);
                refs[index - 1]!.current!.focus();
              }
            }}
          />
        );
      })}
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 7,
    padding: 12,
    borderColor: '#D1E1F5',
    borderRadius: 10,
    width: 328,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTexts: {
    width: 45,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#E1EEFF',
    fontSize: 12,
    fontFamily: fonts.WorkBold,
    color: '#A8CDFF',
    borderWidth: 1.35,
    borderColor: '#D5E7FF',
  },
});
