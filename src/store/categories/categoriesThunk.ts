import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { Category } from '../../types';

export const createCategory = createAsyncThunk<void, Category>(
  'categories/create',
  async (category) => {
    await axiosApi.post('category.json', category);
  },
);