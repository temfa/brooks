import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AirtimeHistoryScreen from '../screens/Airtime/AirtimeHistoryScreen';
import AirtimeWelcomeScreen from '../screens/Airtime/AirtimeWelcomeScreen';
import GetAirtimeScreen from '../screens/Airtime/GetAirtimeScreen';
import GetDataScreen from '../screens/Airtime/GetDataScreen';
import BillsHistoryScreen from '../screens/Bills/BillsHistoryScreen';
import BillsProviderCableScreen from '../screens/Bills/BillsProviderCableScreen';
import BillsProviderElectScreen from '../screens/Bills/BillsProviderElectScreen';
import BillWelcomeScreen from '../screens/Bills/BillsWelcomeScreen';
import ChoosePackagesScreen from '../screens/Bills/ChoosePackagesScreen';
import GetCableScreen from '../screens/Bills/GetCableScreen';
import GetElectricityScreen from '../screens/Bills/GetElectricityScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import NotificationScreen from '../screens/Home/NotificationScreen';
import BasicInfoScreen from '../screens/KYC/BasicInfoScreen';
import KYCWelcomeScreen from '../screens/KYC/KYCWelcomeScreen';
import MoreWelcomeScreen from '../screens/More/MoreWelcomeScreen';
import InstantTransferScreen from '../screens/Transfer/InstantTransferScreen';
import TransactionHistoryScreen from '../screens/Transfer/TransactionHistoryScreen';
import TransferScreen from '../screens/Transfer/TransferScreen';
import TransferSummaryScreen from '../screens/Transfer/TransferSummaryScreen';
import BankInfoScreen from '../screens/KYC/BankInfoScreen';
import NextKinScreen from '../screens/KYC/NextKinScreen';
import UploadDocumentScreen from '../screens/KYC/UploadDocumentScreen';
import TakeSelfieScreen from '../screens/KYC/TakeSelfieScreen';
import MyAccountWelcomeScreen from '../screens/MyAccount/MyAccountWelcomeScreen';
import MyPinScreen from '../screens/MyAccount/MyPinScreen';
import ChangePasswordScreen from '../screens/MyAccount/ChangePasswordScreen';
import ChangeLimitScreen from '../screens/MyAccount/ChangeLimitScreen';
import CardScreen from '../screens/MyAccount/CardScreen';
import BeneficiariesScreen from '../screens/MyAccount/BeneficiariesScreen';
import TransferBeneScreen from '../screens/MyAccount/TransferBeneScreen';
import PaymentBeneScreen from '../screens/MyAccount/PaymentBeneScreen';
import LoanWelcomeScreen from '../screens/Loan/LoanWelcomeScreen';
import ForgotEmailScreen from '../screens/Forgot/ForgotEmailScreen';
import ForgotOtpScreen from '../screens/Forgot/ForgotOtpScreen';
import ForgotNewScreen from '../screens/Forgot/ForgotNewScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};
export const AirtimeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AirtimeWelcome">
      <Stack.Screen name="AirtimeWelcome" component={AirtimeWelcomeScreen} />
      <Stack.Screen name="AirtimeHistory" component={AirtimeHistoryScreen} />
      <Stack.Screen name="GetAirtime" component={GetAirtimeScreen} />
      <Stack.Screen name="GetData" component={GetDataScreen} />
    </Stack.Navigator>
  );
};

export const BillsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BillWelcome">
      <Stack.Screen name="BillWelcome" component={BillWelcomeScreen} />
      <Stack.Screen name="BillsHistory" component={BillsHistoryScreen} />
      <Stack.Screen
        name="BillsProviderElect"
        component={BillsProviderElectScreen}
      />
      <Stack.Screen name="GetElectricity" component={GetElectricityScreen} />
      <Stack.Screen name="GetCable" component={GetCableScreen} />
      <Stack.Screen
        name="BillsProviderCable"
        component={BillsProviderCableScreen}
      />
      <Stack.Screen name="ChoosePackages" component={ChoosePackagesScreen} />
    </Stack.Navigator>
  );
};
export const TransferStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TransferHome">
      <Stack.Screen name="TransferHome" component={TransferScreen} />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen name="InstantTransfer" component={InstantTransferScreen} />
      <Stack.Screen name="TransferSummary" component={TransferSummaryScreen} />
    </Stack.Navigator>
  );
};
export const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MoreWelcome">
      <Stack.Screen name="MoreWelcome" component={MoreWelcomeScreen} />
    </Stack.Navigator>
  );
};

export const KycStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="KycWelcome">
      <Stack.Screen name="KycWelcome" component={KYCWelcomeScreen} />
      <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
      <Stack.Screen name="BankInfo" component={BankInfoScreen} />
      <Stack.Screen name="NextKin" component={NextKinScreen} />
      <Stack.Screen name="UploadDoc" component={UploadDocumentScreen} />
      <Stack.Screen name="TakeSelfie" component={TakeSelfieScreen} />
    </Stack.Navigator>
  );
};
export const MyAccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyAccountWelcome">
      <Stack.Screen
        name="MyAccountWelcome"
        component={MyAccountWelcomeScreen}
      />
      <Stack.Screen name="PinSettings" component={MyPinScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="ChangeLimit" component={ChangeLimitScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="Beneficiaries" component={BeneficiariesScreen} />
      <Stack.Screen name="TransferBene" component={TransferBeneScreen} />
      <Stack.Screen name="PaymentBene" component={PaymentBeneScreen} />
    </Stack.Navigator>
  );
};
export const LoanStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoanWelcome">
      <Stack.Screen name="LoanWelcome" component={LoanWelcomeScreen} />
      <Stack.Screen name="PinSettings" component={MyPinScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="ChangeLimit" component={ChangeLimitScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="Beneficiaries" component={BeneficiariesScreen} />
      <Stack.Screen name="TransferBene" component={TransferBeneScreen} />
      <Stack.Screen name="PaymentBene" component={PaymentBeneScreen} />
    </Stack.Navigator>
  );
};
export const ForgotStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ForgotEmail">
      <Stack.Screen name="ForgotEmail" component={ForgotEmailScreen} />
      <Stack.Screen name="ForgotOtp" component={ForgotOtpScreen} />
      <Stack.Screen name="ForgotNew" component={ForgotNewScreen} />
    </Stack.Navigator>
  );
};
