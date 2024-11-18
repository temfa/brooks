import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import store from '../store/store';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {ActivityIndicator} from 'react-native';

export function Providers({children}: {children: React.ReactNode}) {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator animating size={'large'} />}
        persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
