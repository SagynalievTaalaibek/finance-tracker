import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFetchTransactionsLoading, selectTransactions } from '../../store/transaction/transactionSlice';
import { deleteTransaction, fetchTransactions } from '../../store/transaction/transactionThunk';
import { useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import TransactionCard from '../../components/TransactionCard/TransactionCard';

const Transaction = () => {
  const transactions = useAppSelector(selectTransactions);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectFetchTransactionsLoading);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const totalIncome = transactions.reduce((sum, item) => {
    if (item.type === 'Income') {
      return sum + item.amount;
    }
    return sum;
  }, 0);

  const totalExpense = transactions.reduce((sum, item) => {
    if (item.type === 'Expense') {
      return sum - item.amount;
    }
    return sum;
  }, totalIncome);

  const deleteTransactionCard = async (id: string) => {
    const result = confirm('Do you want to delete? ');

    if (result) {
      await dispatch(deleteTransaction(id));
      await dispatch(fetchTransactions());
    }
  };


  return (
    <>
      <h4 className="my-3">Total: {totalExpense} KGS</h4>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
              deleteLoading={false}
              deleteTransaction={deleteTransactionCard}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Transaction;