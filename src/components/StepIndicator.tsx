/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {fonts} from '../constants/fonts';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type Props = {
  step: number;
  totalSteps: number;
};
const CircularStepIndicator: FC<Props> = ({step, totalSteps}) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const progress = (step / totalSteps) * circumference;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <View style={styles.container}>
      <Svg height={50} width={50}>
        {/* Background Circle */}
        <Circle
          cx="25"
          cy="25"
          r={radius}
          stroke="grey"
          strokeWidth={4}
          fill="none"
        />
        {/* Animated Progress Circle */}
        <AnimatedCircle
          cx="25"
          cy="25"
          r={radius}
          stroke="#407BFF"
          strokeWidth={4}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressAnim.interpolate({
            inputRange: [0, circumference],
            outputRange: [circumference, 0],
          })}
          strokeLinecap="round" // Smooth, rounded stroke ends
        />
      </Svg>
      {/* Text in Center of Circle */}
      <Text style={styles.stepText}>
        {step}
        <Text style={{color: '#6D7173', fontSize: 14}}>/{totalSteps}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    position: 'absolute',
    fontSize: 16,
    fontFamily: fonts.WorkSemiBold,
    color: '#407BFF',
  },
});

export default CircularStepIndicator;
