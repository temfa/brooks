import {configureStore} from '@reduxjs/toolkit';
import {mutationApi} from '../api/mutationApi';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import authReducer from '../slice/auth';
import profileReducer from '../slice/profile';
import subscribeReducer from '../slice/subscribe';

import {setupListeners} from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
const reducers = combineReducers({
  [mutationApi.reducerPath]: mutationApi.reducer,
  auth: authReducer,
  profle: profileReducer,
  subscribe: subscribeReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mutationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
setupListeners(store.dispatch);

export default store;
