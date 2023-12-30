import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { AppDispatch } from '../../app/store';
import { ApiListTransaction, ApiTransaction, Transaction } from '../../types';
import dayjs from 'dayjs';

export const createTransaction = createAsyncThunk<void, Transaction>(
  'transaction/create',
  async (transaction) => {
    await axiosApi.post('transaction.json', transaction);
  },
);

export const fetchTransactions = createAsyncThunk<ApiTransaction[], undefined, { dispatch: AppDispatch }>(
  'transaction/fetchAllTransaction',
  async () => {
    const transactionsResponse = await axiosApi.get<ApiListTransaction | null>('/transaction.json');
    const transactions = transactionsResponse.data;

    let newTransactions: ApiTransaction[] = [];

    if (transactions) {
      newTransactions = Object.keys(transactions).map(id => {
        const transaction = transactions[id];

        return {
          ...transaction,
          date: dayjs(transaction.date).format('DD.MM.YYYY HH:mm:ss'),
          id,
        };
      });
    }

    return newTransactions;
  },
);

export const fetchOneTransaction = createAsyncThunk<Transaction, string>(
  'transaction/fetchOne',
  async (id) => {
    const transactionResponse = await axiosApi.get<Transaction | null>(`/transaction/${id}.json`);
    const transaction = transactionResponse.data;

    if (transaction === null) {
      throw new Error('Transaction not found!');
    }

    return transaction;
  },
);

interface UpdateTransactionParams {
  id: string;
  transaction: Transaction;
}

export const updateTransaction = createAsyncThunk<void, UpdateTransactionParams>(
  'transaction/update',
  async ({ id, transaction }) => {
    await axiosApi.put(`/transaction/${id}.json`, transaction);
  },
);

export const deleteTransaction = createAsyncThunk<void, string>(
  'transaction/delete',
  async (id) => {
    await axiosApi.delete(`/transaction/${id}.json`);
  },
);