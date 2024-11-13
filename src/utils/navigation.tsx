/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeSvg from '../assets/svgs/homeSvg';
import MoreSvg from '../assets/svgs/moreSvg';
import BillSvg from '../assets/svgs/billSvg';
import TransferScreen from '../screens/Transfer/TransferScreen';
import {fonts} from '../constants/fonts';
import TransferSvg from '../assets/svgs/transferSvg';
import NotificationScreen from '../screens/Home/NotificationScreen';
import TransactionHistoryScreen from '../screens/Transfer/TransactionHistoryScreen';
import InstantTransferScreen from '../screens/Transfer/InstantTransferScreen';
import TransferSummaryScreen from '../screens/Transfer/TransferSummaryScreen';
import AirtimeWelcomeScreen from '../screens/Airtime/AirtimeWelcomeScreen';
import AirtimeHistoryScreen from '../screens/Airtime/AirtimeHistoryScreen';
import GetAirtimeScreen from '../screens/Airtime/GetAirtimeScreen';
import GetDataScreen from '../screens/Airtime/GetDataScreen';
import BillWelcomeScreen from '../screens/Bills/BillsWelcomeScreen';
import BillsHistoryScreen from '../screens/Bills/BillsHistoryScreen';
import BillsProviderElectScreen from '../screens/Bills/BillsProviderElectScreen';
import GetElectricityScreen from '../screens/Bills/GetElectricityScreen';
import BillsProviderCableScreen from '../screens/Bills/BillsProviderCableScreen';
import ChoosePackagesScreen from '../screens/Bills/ChoosePackagesScreen';
import GetCableScreen from '../screens/Bills/GetCableScreen';

const Stack = createNativeStackNavigator();
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
              color: focused ? '#E7375B' : '#939699',
              fontFamily: focused ? fonts.WorkBold : fonts.WorkRegular,
            },
          ]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const AirtimeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="AirtimeWelcome">
      <Stack.Screen
        name="AirtimeWelcome"
        component={AirtimeWelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AirtimeHistory"
        component={AirtimeHistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetAirtime"
        component={GetAirtimeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetData"
        component={GetDataScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const BillsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="BillWelcome">
      <Stack.Screen
        name="BillWelcome"
        component={BillWelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BillsHistory"
        component={BillsHistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BillsProviderElect"
        component={BillsProviderElectScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetElectricity"
        component={GetElectricityScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetCable"
        component={GetCableScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BillsProviderCable"
        component={BillsProviderCableScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChoosePackages"
        component={ChoosePackagesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const TransferStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="TransferHome">
      <Stack.Screen
        name="TransferHome"
        component={TransferScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InstantTransfer"
        component={InstantTransferScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferSummary"
        component={TransferSummaryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const buttonTabData = [
  {
    name: 'Home',
    component: HomeStack,
    icon: <HomeSvg color="#8C9297" />,
    iconActive: <HomeSvg color="#E7375B" />,
  },
  {
    name: 'Transfer',
    component: TransferStack,
    icon: <TransferSvg color="#8C9297" />,
    iconActive: <TransferSvg color="#E7375B" />,
  },
  {
    name: 'Pay Bills',
    component: BillsStack,
    icon: <BillSvg color="#8C9297" />,
    iconActive: <BillSvg color="#E7375B" />,
  },
  {
    name: 'More',
    component: TransferScreen,
    icon: <MoreSvg color="#8C9297" />,
    iconActive: <MoreSvg color="#E7375B" />,
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
