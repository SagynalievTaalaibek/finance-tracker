import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ApiTransaction, Transaction } from '../../types';
import {
  createTransaction,
  deleteTransaction,
  fetchOneTransaction,
  fetchTransactions,
  updateTransaction,
} from './transactionThunk';

interface CategoriesState {
  transactions: ApiTransaction[];
  transaction: Transaction | null;
  createNewTransactionLoading: boolean;
  fetchAllTransactionsLoading: boolean;
  fetchOneTransactionLoading: boolean;
  updateLoading: boolean;
  deleteLoading: false | string;
}

const initialState: CategoriesState = {
  transactions: [],
  transaction: null,
  createNewTransactionLoading: false,
  fetchAllTransactionsLoading: false,
  fetchOneTransactionLoading: false,
  updateLoading: false,
  deleteLoading: false,
};


export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTransaction.pending, (state) => {
      state.createNewTransactionLoading = true;
    });
    builder.addCase(createTransaction.fulfilled, (state) => {
      state.createNewTransactionLoading = true;
    });
    builder.addCase(createTransaction.rejected, (state) => {
      state.createNewTransactionLoading = false;
    });

    builder.addCase(fetchTransactions.pending, (state) => {
      state.fetchAllTransactionsLoading = true;
    });
    builder.addCase(fetchTransactions.fulfilled, (state, { payload: items }) => {
      state.fetchAllTransactionsLoading = false;
      state.transactions = items;
    });
    builder.addCase(fetchTransactions.rejected, (state) => {
      state.fetchAllTransactionsLoading = false;
    });

    builder.addCase(fetchOneTransaction.pending, (state) => {
      state.fetchOneTransactionLoading = true;
    });
    builder.addCase(fetchOneTransaction.fulfilled, (state, { payload: items }) => {
      state.fetchOneTransactionLoading = false;
      state.transaction = items;
    });
    builder.addCase(fetchOneTransaction.rejected, (state) => {
      state.fetchOneTransactionLoading = false;
    });

    builder.addCase(updateTransaction.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updateTransaction.fulfilled, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(updateTransaction.rejected, (state) => {
      state.updateLoading = false;
    });

    builder.addCase(deleteTransaction.pending, (state, { meta }) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteTransaction.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteTransaction.rejected, (state) => {
      state.deleteLoading = false;
      state.fetchAllTransactionsLoading = false;
    });
  },
});

export const transactionReducer = transactionSlice.reducer;
export const selectTransactions = (state: RootState) => state.transaction.transactions;
export const selectTransaction = (state: RootState) => state.transaction.transaction;

export const selectCreateTransactionLoading = (state: RootState) => state.transaction.createNewTransactionLoading;
export const selectFetchTransactionsLoading = (state: RootState) => state.transaction.fetchAllTransactionsLoading;
export const selectFetchOneTransactionLoading = (state: RootState) => state.transaction.fetchOneTransactionLoading;
export const selectUpdateTransactionLoading = (state: RootState) => state.transaction.updateLoading;
export const selectDeleteTransactionLoading = (state: RootState) => state.transaction.deleteLoading;
