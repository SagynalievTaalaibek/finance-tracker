import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createCategory } from '../../store/categories/categoriesThunk';
import { selectCreateCategoryLoading } from '../../store/categories/categoriesSlice';
import CategoryForm from '../../components/CategoryForm/CategoryForm';
import { Category } from '../../types';

const AddEditCategory = () => {
  const dispatch = useAppDispatch();
  const {paramsId} = useParams();
  const navigate = useNavigate();
  const createLoading = useAppSelector(selectCreateCategoryLoading);

  let title = 'Add';

  if (paramsId) {
    title = 'Edit';
  }

  const sendCategory = async (category: Category) => {
    await dispatch(createCategory(category));
    navigate('/categories');
    console.log(category);
  };

  return (
    <div className="row-cols-lg-2">
      <CategoryForm onSubmit={sendCategory} title={title} isLoading={createLoading}/>
    </div>
  );
};

export default AddEditCategory;