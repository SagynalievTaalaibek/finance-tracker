import React, { useState } from 'react';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import { Category } from '../../types';

interface Props {
  onSubmit: (category: Category) => void;
  isLoading: boolean;
  title: string;
}

const CategoryForm: React.FC<Props> = ({ onSubmit, title, isLoading }) => {
  const [category, setCategory] = useState({
    type: '',
    name: '',
  });

  const changeCategory = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCategory((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(category);
    setCategory({
      type: '',
      name: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{title} category</h4>
      <div className='form-group my-2'>
        <label htmlFor='type'>Type</label>
        <select
          className='form-select'
          name='type'
          value={category.type}
          id='category'
          required
          onChange={changeCategory}
        >
          <option value=''>Choose type</option>
          <option value='Expense'>Expense</option>
          <option value='Income'>Income</option>
        </select>
      </div>
      <div className='form-group my-2'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          required
          className='form-control'
          value={category.name}
          onChange={changeCategory}
        />
      </div>
      <button
        type='submit'
        className='btn btn-primary'
        disabled={isLoading}
      >
        {isLoading && <ButtonSpinner />}
        Save
      </button>
    </form>
  );
};

export default CategoryForm;