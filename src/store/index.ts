import { configureStore } from '@reduxjs/toolkit';
import reducers from 'src/reducers';

const IS_DEV = true;

const store = configureStore({
  reducer: reducers,
  devTools: IS_DEV,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
