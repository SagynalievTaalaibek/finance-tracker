import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { AppDispatch } from '../../app/store';
import { ApiCategory, ApiCategoryList, Category } from '../../types';

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

export const fetchOneCategory = createAsyncThunk<Category, string>(
  'categories/fetchOne',
  async (id) => {
    const categoryResponse = await axiosApi.get<Category | null>(`/category/${id}.json`);
    const category = categoryResponse.data;

    if (category === null) {
      throw new Error('Category not found!');
    }

    return category;
  },
);

interface UpdateCategoryParams {
  id: string;
  category: Category;
}

export const updateCategory = createAsyncThunk<void, UpdateCategoryParams>(
  'categories/update',
  async ({ id, category }) => {
    await axiosApi.put(`/category/${id}.json`, category);
  },
);

export const deleteCategory = createAsyncThunk<void, string>(
  'categories/delete',
  async (id) => {
    await axiosApi.delete(`/category/${id}.json`);
  },
);