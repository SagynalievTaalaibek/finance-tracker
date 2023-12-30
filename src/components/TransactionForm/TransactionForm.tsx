import React, { useState } from 'react';
import { Transaction, TransactionMutation } from '../../types';
import { useAppSelector } from '../../app/hooks';
import { selectCategories } from '../../store/categories/categoriesSlice';

interface Props {
  existingTransaction?: TransactionMutation;
  onSubmit: (element: Transaction) => void;
  isEdit?: boolean;
}

const initialState: TransactionMutation = {
  type: '',
  name: '',
  amount: '',
};


const TransactionForm: React.FC<Props> = ({ onSubmit, existingTransaction = initialState, isEdit }) => {
  const [transaction, setTransaction] = useState<TransactionMutation>(existingTransaction);
  const categories = useAppSelector(selectCategories);
  // const loading = useAppSelector(select);


  const onChangeTransaction = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setTransaction(prev => ({
      ...prev, [name]: value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      ...transaction,
      amount: parseFloat(transaction.amount),
      date: new Date().toISOString(),
    });

    setTransaction({
      type: '',
      name: '',
      amount: '',
    });
  };

  const filteredCategories = categories.filter(item => item.type === transaction.type);

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <h4>{isEdit ? 'Edit ' : 'Add '} category</h4>
        <div className='form-group my-2'>
          <label htmlFor='type'>Type</label>
          <select
            className='form-select'
            name='type'
            value={transaction.type}
            id='category'
            required
            onChange={onChangeTransaction}
          >
            <option value=''>Choose type</option>
            <option value='Expense'>Expense</option>
            <option value='Income'>Income</option>
          </select>
        </div>
        <div className='form-group my-2'>
          <label htmlFor='name'>Name</label>
          <select
            name='name'
            id='name'
            className='form-select mt-2 text-capitalize'
            required
            value={transaction.name}
            onChange={onChangeTransaction}
          >
            <option value=''>Choose a category</option>
            {filteredCategories.map(item => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group my-2'>
          <label htmlFor='name'>Amount</label>
          <input
            type='number'
            name='amount'
            id='amount'
            required
            className='form-control'
            value={transaction.amount}
            onChange={onChangeTransaction}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          // disabled={isLoading}
        >
          {/* {isLoading && <ButtonSpinner />}*/}
          Save
        </button>
      </form>
    </>
  );
};

export default TransactionForm;