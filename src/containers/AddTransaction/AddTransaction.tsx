import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categoriesThunk';
import { Transaction } from '../../types';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { selectCreateTransactionLoading } from '../../store/transaction/transactionSlice';
import { createTransaction } from '../../store/transaction/transactionThunk';
import { selectCategories } from '../../store/categories/categoriesSlice';

const AddTransaction = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectCreateTransactionLoading);
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const sendTransaction = async (item: Transaction) => {
    await dispatch(createTransaction(item));
    navigate('/');
  };

  return (
    <>
      <TransactionForm
        onSubmit={sendTransaction}
        isLoading={loading}
        categories={categories}
      />
    </>
  );
};

export default AddTransaction;