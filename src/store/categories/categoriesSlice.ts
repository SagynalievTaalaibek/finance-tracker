import { createSlice } from '@reduxjs/toolkit';
import { createCategory, fetchCategories } from './categoriesThunk';
import { RootState } from '../../app/store';
import { ApiCategory } from '../../types';

interface CategoriesState {
  categories: ApiCategory[];
  createNewCategoryLoading: boolean;
  fetchAllCategoriesLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  createNewCategoryLoading: false,
  fetchAllCategoriesLoading: false,
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
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const selectCategories = (state: RootState) => state.category.categories;
// export const selectDish = (state: RootState) => state.dishes.dish;

export const selectCreateCategoryLoading = (state: RootState) => state.category.createNewCategoryLoading;
export const selectFetchCategoriesLoading = (state: RootState) => state.category.fetchAllCategoriesLoading;
/*
export const selectDeleteDishLoading = (state: RootState) => state.dishes.deleteLoading;
export const selectCreateDishLoading = (state: RootState) => state.dishes.createLoading;
export const selectFetchOneDishLoading = (state: RootState) => state.dishes.fetchOneLoading;
export const selectUpdateDishLoading = (state: RootState) => state.dishes.updateLoading;*/
