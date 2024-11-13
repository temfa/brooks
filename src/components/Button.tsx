import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {fonts} from '../constants/fonts';

type Props = {
  action: () => void;
  buttonText: string;
};
const Button: FC<Props> = ({action, buttonText}) => {
  return (
    <Pressable style={styles.button} onPress={action}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
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
