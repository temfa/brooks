import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {quick} from '../utils/data';
import {fonts} from '../constants/fonts';

const QuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quickTitle}>Quick Actions</Text>
      <View style={styles.quickContainer}>
        {quick?.map((item, index) => {
          return (
            <View style={styles.quickSingle} key={index}>
              <View style={styles.quickIcon}>{item.icon}</View>
              <Text style={styles.quickText}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({
  container: {
    gap: 18,
    paddingHorizontal: 25,
    marginTop: 20,
    paddingBottom: 11,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DCD6CF',
  },
  quickTitle: {
    fontFamily: fonts.WorkSemiBold,
    fontSize: 16,
    lineHeight: 18,
    color: '#272626',
  },
  quickContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickSingle: {
    width: 65,
    gap: 7,
    alignItems: 'center',
  },
  quickIcon: {
    backgroundColor: '#CEE2FC',
    width: 47,
    height: 47,
    borderRadius: 23.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickText: {
    fontSize: 12,
    fontFamily: fonts.WorkMedium,
    lineHeight: 18,
    color: '#5F5D5D',
    textAlign: 'center',
  },
});