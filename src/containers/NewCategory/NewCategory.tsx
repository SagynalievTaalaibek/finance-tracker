import CategoryForm from '../../components/CategoryForm/CategoryForm';
import { Category } from '../../types';

const NewCategory = () => {

  const sendCategory = (category: Category) => {
    console.log(category);
  };

  return (
    <div className="row-cols-lg-2">
      <CategoryForm onSubmit={sendCategory}/>
    </div>
  );
};

export default NewCategory;