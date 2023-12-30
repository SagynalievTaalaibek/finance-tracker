import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categoriesThunk';
import { Transaction } from '../../types';
import TransactionForm from '../../components/TransactionForm/TransactionForm';

const AddTransaction = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  const sendTransaction = async (item: Transaction) => {
    // await dispatch(create);
    console.log(item);
    navigate('/');
  };

  return (
    <>
      <TransactionForm
        onSubmit={sendTransaction}
      />
    </>
  );
};

export default AddTransaction;