import {SafeAreaView, StatusBar} from 'react-native';
import React, {ReactNode} from 'react';

const SafeArea = ({children}: {children: ReactNode}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#D0E4FF" />
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
