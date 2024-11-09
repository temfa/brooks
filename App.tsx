/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import WelcomeScreen from './src/screens/Onboarding/WelcomeScreen';
import WalkthroughScreen from './src/screens/Onboarding/WalkthroughScreen';
import RegisterScreen from './src/screens/Onboarding/RegisterScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import RegisterSuccessScreen from './src/screens/Onboarding/RegisterSuccessScreen';
import EnableBioScreen from './src/screens/Onboarding/EnableBioScreen';
import LoginScreen from './src/screens/Onboarding/LoginScreen';
import {ButtonTab} from './src/utils/navigation';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <NavigationContainer fallback={<ActivityIndicator animating />}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="EnableBio" component={EnableBioScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="RegisterSuccess"
              component={RegisterSuccessScreen}
            />
            <Stack.Screen name="Dashboard" component={ButtonTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
