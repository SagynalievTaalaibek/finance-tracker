import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCategories,
  selectDeleteCategoryLoading,
  selectFetchCategoriesLoading,
} from '../../store/categories/categoriesSlice';
import { deleteCategory, fetchCategories } from '../../store/categories/categoriesThunk';
import Spinner from '../../components/Spinner/Spinner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Category = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const categoriesLoading = useAppSelector(selectFetchCategoriesLoading);
  const deleteLoading = useAppSelector(selectDeleteCategoryLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const deleteCard = async (id: string) => {
    const result = confirm('Do you want to delete? ');

    if (result) {
      await dispatch(deleteCategory(id));
      await dispatch(fetchCategories());
    }
  };

  return (
    <>
      <div className='d-flex justify-content-between mb-3'>
        <h3>Category</h3>
        <button className='btn btn-primary' onClick={() => navigate('/category-add')}>Add new category</button>
      </div>
      {categoriesLoading ? <Spinner /> : categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          deleteLoading={deleteLoading}
          deleteCategory={(id) => deleteCard(id)}
        />
      ))}
    </>
  );
};

export default Category;