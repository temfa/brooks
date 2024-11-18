/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, FC} from 'react';
import {
  TextInput,
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardTypeOptions,
} from 'react-native';
import {fonts} from '../constants/fonts';

type Props = {
  label: string;
  type: KeyboardTypeOptions;
};

const Input: FC<Props> = ({label, type}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const labelAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(labelAnim, {
      toValue: 0.4,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
      Animated.timing(labelAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  };

  const labelStyle = {
    transform: [
      {
        translateY: labelAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [17, 0], // Adjust starting position for label
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={handleFocus}>
      <View
        style={[
          {...styles.container},
          {borderColor: isFocused || inputValue ? '#64A4FA' : '#B4B7B9'},
        ]}>
        <Animated.Text style={[styles.label, labelStyle]}>
          {label}
        </Animated.Text>
        <TextInput
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChangeText={setInputValue}
          keyboardType={type}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  label: {
    position: 'absolute',
    left: 14,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.09,
    fontFamily: fonts.SatoshiMedium,
    color: '#585C60',
  },
  input: {
    fontSize: 14,
    fontFamily: fonts.SatoshiMedium,
    lineHeight: 17.54,
    letterSpacing: 0.09,
    color: '#191A1C',
    paddingTop: 30,
  },
});

export default Input;
