import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Category from './containers/Category/Category';
import AddCategory from './containers/AddCategory/AddCategory';
import EditCategory from './containers/EditCategory/EditCategory';
import Transaction from './containers/Transaction/Transaction';
import AddTransaction from './containers/AddTransaction/AddTransaction';
import EditTransaction from './containers/EditTransaction/EditTransaction';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Transaction />} />
        <Route path='/transaction-add' element={<AddTransaction />} />
        <Route path='/transaction/:id/edit' element={<EditTransaction />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/category-add' element={<AddCategory />} />
        <Route path='/categories/:id/edit' element={<EditCategory />} />
        <Route path='*' element={'Not Found'} />
      </Routes>
    </Layout>
  );
};

export default App;