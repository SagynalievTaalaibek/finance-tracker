import React from 'react';
import { ApiTransaction } from '../../types';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import { useNavigate } from 'react-router-dom';

interface Props {
  transaction: ApiTransaction;
  deleteLoading: boolean | string;
  deleteTransaction: (id: string) => void;
}

const TransactionCard: React.FC<Props> = ({ transaction, deleteTransaction, deleteLoading }) => {
  const navigate = useNavigate();

  return (
    <div className='card mb-2'>
      <div className='card-body d-flex justify-content-between'>
        <p className='mt-1'>{transaction.date}</p>
        <p className='mt-1'>{transaction.name}</p>
        <p className='mt-1' style={{ color: transaction.type === 'Expense' ? 'red' : 'green' }}>
          {transaction.type === 'Expense' ? `-${transaction.amount}` : `+${transaction.amount}`}
        </p>
        <div>
          <strong className='card-text me-5'>{transaction.type}</strong>
          <button className='btn btn-primary me-2'
                  onClick={() => navigate(`/transaction/${transaction.id}/edit`)}>Edit
          </button>
          <button
            className='btn btn-danger'
            onClick={() => deleteTransaction(transaction.id)}
            disabled={deleteLoading ? deleteLoading === transaction.id : false}
          >
            {deleteLoading && deleteLoading === transaction.id && (<ButtonSpinner />)}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;