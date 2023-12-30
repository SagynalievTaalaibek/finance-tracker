import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from '../store/categories/categoriesSlice';
import { transactionReducer } from '../store/transaction/transactionSlice';

export const store = configureStore({
  reducer: {
    category: categoriesReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;