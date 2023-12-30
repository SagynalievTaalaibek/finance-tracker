import { createSlice } from '@reduxjs/toolkit';
import { createCategory } from './categoriesThunk';
import { RootState } from '../../app/store';
import { ApiCategory } from '../../types';

interface CategoriesState {
  categories: ApiCategory[];
  createNewCategoryLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  createNewCategoryLoading: false,
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

  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const selectCategories = (state: RootState) => state.category.categories;
// export const selectDish = (state: RootState) => state.dishes.dish;

export const selectCreateCategoryLoading = (state: RootState) => state.category.createNewCategoryLoading;

/*
export const selectFetchDishLoading = (state: RootState) => state.dishes.fetchLoading;
export const selectDeleteDishLoading = (state: RootState) => state.dishes.deleteLoading;
export const selectCreateDishLoading = (state: RootState) => state.dishes.createLoading;
export const selectFetchOneDishLoading = (state: RootState) => state.dishes.fetchOneLoading;
export const selectUpdateDishLoading = (state: RootState) => state.dishes.updateLoading;*/
