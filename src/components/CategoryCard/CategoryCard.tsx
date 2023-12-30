import React from 'react';
import { ApiCategory } from '../../types';
import { useNavigate } from 'react-router-dom';
import ButtonSpinner from '../Spinner/ButtonSpinner';

interface Props {
  category: ApiCategory;
  deleteLoading: boolean | string;
  deleteCategory: (id: string) => void;
}

const CategoryCard: React.FC<Props> = ({ category, deleteCategory, deleteLoading }) => {
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
          <button
            className='btn btn-danger'
            onClick={() => deleteCategory(category.id)}
            disabled={deleteLoading ? deleteLoading === category.id : false}
          >
            {deleteLoading && deleteLoading === category.id && (<ButtonSpinner />)}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;