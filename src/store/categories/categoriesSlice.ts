import { createSlice } from '@reduxjs/toolkit';
import { createCategory, deleteCategory, fetchCategories, fetchOneCategory, updateCategory } from './categoriesThunk';
import { RootState } from '../../app/store';
import { ApiCategory, Category } from '../../types';

interface CategoriesState {
  categories: ApiCategory[];
  category: Category | null;
  createNewCategoryLoading: boolean;
  fetchAllCategoriesLoading: boolean;
  fetchOneCategoryLoading: boolean;
  updateLoading: boolean;
  deleteLoading: false | string;
}

const initialState: CategoriesState = {
  categories: [],
  category: null,
  createNewCategoryLoading: false,
  fetchAllCategoriesLoading: false,
  fetchOneCategoryLoading: false,
  updateLoading: false,
  deleteLoading: false,
};


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCategory.pending, (state) => {
      state.createNewCategoryLoading = true;
    });
    builder.addCase(createCategory.fulfilled, (state) => {
      state.createNewCategoryLoading = true;
    });
    builder.addCase(createCategory.rejected, (state) => {
      state.createNewCategoryLoading = false;
    });

    builder.addCase(fetchCategories.pending, (state) => {
      state.fetchAllCategoriesLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload: items }) => {
      state.fetchAllCategoriesLoading = false;
      state.categories = items;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.fetchAllCategoriesLoading = false;
    });

    builder.addCase(fetchOneCategory.pending, (state) => {
      state.fetchOneCategoryLoading = true;
    });
    builder.addCase(fetchOneCategory.fulfilled, (state, { payload: items }) => {
      state.fetchOneCategoryLoading = false;
      state.category = items;
    });
    builder.addCase(fetchOneCategory.rejected, (state) => {
      state.fetchOneCategoryLoading = false;
    });

    builder.addCase(updateCategory.pending, (state) => {
      state.updateLoading = true;
    });
    builder.addCase(updateCategory.fulfilled, (state) => {
      state.updateLoading = false;
    });
    builder.addCase(updateCategory.rejected, (state) => {
      state.updateLoading = false;
    });

    builder.addCase(deleteCategory.pending, (state, { meta }) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteCategory.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteCategory.rejected, (state) => {
      state.deleteLoading = false;
      state.fetchAllCategoriesLoading = false;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const selectCategories = (state: RootState) => state.category.categories;
export const selectCategory = (state: RootState) => state.category.category;

export const selectCreateCategoryLoading = (state: RootState) => state.category.createNewCategoryLoading;
export const selectFetchCategoriesLoading = (state: RootState) => state.category.fetchAllCategoriesLoading;
export const selectFetchOneCategoryLoading = (state: RootState) => state.category.fetchOneCategoryLoading;
export const selectUpdateCategoryLoading = (state: RootState) => state.category.updateLoading;
export const selectDeleteCategoryLoading = (state: RootState) => state.category.deleteLoading;
