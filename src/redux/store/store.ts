import {configureStore} from '@reduxjs/toolkit';
import prepareReducer from '../reducers/prepare';

export const store = configureStore({
  reducer: {
    prepare: prepareReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
