import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiCategory, ApiCategoryList, Category } from '../../types';
import { AppDispatch } from '../../app/store';

export const createCategory = createAsyncThunk<void, Category>(
  'categories/create',
  async (category) => {
    await axiosApi.post('category.json', category);
  },
);

export const fetchCategories = createAsyncThunk<ApiCategory[], undefined, { dispatch: AppDispatch }>(
  'categories/fetchAll',
  async () => {
    const categoriesResponse = await axiosApi.get<ApiCategoryList | null>('/category.json');
    const categories = categoriesResponse.data;

    let newCategories: ApiCategory[] = [];

    if (categories) {
      newCategories = Object.keys(categories).map(id => {
        const category = categories[id];
        return {
          ...category,
          id,
        };
      });
    }
    return newCategories;
  },
);