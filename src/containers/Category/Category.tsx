import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Category</h3>
        <button className="btn btn-primary" onClick={() => navigate('/category-add')}>Add new category</button>
      </div>

    </>
  );
};

export default Category;