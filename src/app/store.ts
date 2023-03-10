import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useSelector, useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import mainInfoSlice from '../features/mainInfo/mainInfoSlice';
import animationSlice from './animationSlice';
import burgerSlice from '../features/header/burgerSlice';

const rootReducer = combineReducers({
  mainInfo: mainInfoSlice,
  animation: animationSlice,
  burger: burgerSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export type RootReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
