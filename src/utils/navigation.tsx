/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeSvg from '../assets/svgs/homeSvg';
import MoreSvg from '../assets/svgs/moreSvg';
import BillSvg from '../assets/svgs/billSvg';
import {fonts} from '../constants/fonts';
import TransferSvg from '../assets/svgs/transferSvg';
import {HomeStack, TransferStack, BillsStack, MoreStack} from './stacks';
import HomeSvgActive from '../assets/svgs/homeSvgActive';
import TransferSvgActive from '../assets/svgs/transferSvgActive';
import BillSvgActive from '../assets/svgs/billSvgActive';
import MoreSvgActive from '../assets/svgs/MoreSvgActive';

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      ref={viewRef}
      style={styles.container}>
      <View style={styles.navContainer}>
        {focused ? item.iconActive : item.icon}
        <Text
          style={[
            {...styles.navTitle},
            {
              color: focused ? '#0E43F6' : '#828282',
              fontFamily: focused ? fonts.AeonikBold : fonts.AeonikRegular,
            },
          ]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const buttonTabData = [
  {
    name: 'Home',
    component: HomeStack,
    icon: <HomeSvg />,
    iconActive: <HomeSvgActive />,
  },
  {
    name: 'Transfer',
    component: TransferStack,
    icon: <TransferSvg />,
    iconActive: <TransferSvgActive />,
  },
  {
    name: 'Pay Bills',
    component: BillsStack,
    icon: <BillSvg />,
    iconActive: <BillSvgActive />,
  },
  {
    name: 'More',
    component: MoreStack,
    icon: <MoreSvg />,
    iconActive: <MoreSvgActive />,
  },
];

export const ButtonTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
        }}>
        {buttonTabData?.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={({route}) => ({
                tabBarStyle: getTabBarStyle(route),
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              })}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

const getTabBarStyle = (route: any): ViewStyle | undefined => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';

  const hideTabScreens = ['Notification', 'AirtimeWelcome'];

  if (hideTabScreens.includes(routeName)) {
    return {display: 'none'};
  }
  return {
    height: 96,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  navContainer: {
    alignItems: 'center',
    gap: 4,
  },

  navTitle: {
    fontSize: 12,
    lineHeight: 14.08,
  },
});
