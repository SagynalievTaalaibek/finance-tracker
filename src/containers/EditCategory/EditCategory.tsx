import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchOneCategory, updateCategory } from '../../store/categories/categoriesThunk';
import {
  selectCategory,
  selectFetchOneCategoryLoading,
  selectUpdateCategoryLoading,
} from '../../store/categories/categoriesSlice';
import CategoryForm from '../../components/CategoryForm/CategoryForm';
import { Category } from '../../types';
import { useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const EditCategory = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const fetchLoading = useAppSelector(selectFetchOneCategoryLoading);
  const oneCategory = useAppSelector(selectCategory);
  const updateCategoryLoading = useAppSelector(selectUpdateCategoryLoading);

  useEffect(() => {
    dispatch(fetchOneCategory(id));
  }, [dispatch, id]);

  const onSubmit = async (category: Category) => {
    await dispatch(updateCategory({ id, category }));
    navigate('/categories');
  };

  let formSection = <Spinner />;

  if (!fetchLoading) {
    if (oneCategory) {
      formSection = (
        <CategoryForm
          existingCategory={oneCategory}
          onSubmit={onSubmit}
          isLoading={updateCategoryLoading}
          isEdit
        />);
    } else {
      formSection = <h4>Not found</h4>;
    }
  }

  return (
    <div className='row-cols-lg-2'>
      {formSection}
    </div>
  );
};

export default EditCategory;

