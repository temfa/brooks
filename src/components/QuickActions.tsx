import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {quick} from '../utils/data';
import {fonts} from '../constants/fonts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../utils/type';

const QuickActions = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.quickTitle}>Quick Actions</Text>
      <View style={styles.quickContainer}>
        {quick?.map((item, index) => {
          return (
            <Pressable
              style={styles.quickSingle}
              key={index}
              onPress={() => navigation.navigate(item.link)}>
              <View style={styles.quickIcon}>{item.icon}</View>
              <Text style={styles.quickText}>{item.title}</Text>
            </Pressable>
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
    // paddingHorizontal: 25,
    marginTop: 20,
    paddingBottom: 11,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DCD6CF',
  },
  quickTitle: {
    fontFamily: fonts.AeonikBold,
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
    backgroundColor: '#0E43F6',
    width: 47,
    height: 47,
    borderRadius: 23.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickText: {
    fontSize: 12,
    fontFamily: fonts.SatoshiMedium,
    lineHeight: 18,
    color: '#363232',
    textAlign: 'center',
  },
});
