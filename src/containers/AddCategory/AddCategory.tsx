import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createCategory } from '../../store/categories/categoriesThunk';
import { selectCreateCategoryLoading } from '../../store/categories/categoriesSlice';
import CategoryForm from '../../components/CategoryForm/CategoryForm';
import { Category } from '../../types';

const AddCategory = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const createLoading = useAppSelector(selectCreateCategoryLoading);

  const sendCategory = async (category: Category) => {
    await dispatch(createCategory(category));
    navigate('/categories');
  };

  return (
    <div className='row-cols-lg-2'>
      <CategoryForm
        onSubmit={sendCategory}
        isLoading={createLoading}
      />
    </div>
  );
};

export default AddCategory;