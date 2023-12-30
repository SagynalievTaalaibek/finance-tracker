import React from 'react';
import { ApiCategory } from '../../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  category: ApiCategory;
  deleteCategory: (id: string) => void;
}

const CategoryCard: React.FC<Props> = ({category, deleteCategory}) => {
  const navigate = useNavigate();

  return (
    <div className='card mb-2' key={category.id}>
      <div className='card-body d-flex justify-content-between'>
        {category.name}
        <div className=''>
          <strong className='card-text me-5'>{category.type}</strong>
          <button className='btn btn-primary me-2'
                  onClick={() => navigate(`/categories/${category.id}/edit`)}>Edit
          </button>
          <button className='btn btn-danger' onClick={() => deleteCategory(category.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;