/* eslint-disable react-native/no-inline-styles */
import {
  TextInput,
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {fonts} from '../constants/fonts';

const PhoneNumber = () => {
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
          outputRange: [19, 0], // Adjust starting position for label
        }),
      },
    ],
  };
  return (
    <View style={styles.phoneContainer}>
      <View style={styles.left}>
        <Image source={require('../assets/flag.png')} />
        <Text style={styles.numberCode}>+234</Text>
      </View>
      <TouchableWithoutFeedback onPress={handleFocus}>
        <View
          style={[
            {...styles.container},
            {borderColor: isFocused || inputValue ? '#64A4FA' : '#B4B7B9'},
          ]}>
          <Animated.Text style={[styles.label, labelStyle]}>
            Phone Number
          </Animated.Text>
          <TextInput
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="number-pad"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  phoneContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#B4B7B9',
    borderRadius: 10,
    height: 57,
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  left: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 8,
  },
  numberCode: {
    fontSize: 12,
    lineHeight: 12,
    color: '#A1A4A3',
    marginTop: 3,
    fontFamily: fonts.SatoshiMedium,
  },
  container: {
    borderLeftWidth: 1,
    borderLeftColor: '#DCE5E9',
    paddingLeft: 15,
  },
  label: {
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
  },
});
