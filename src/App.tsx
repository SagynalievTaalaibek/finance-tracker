import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Category from './containers/Category/Category';
import NewCategory from './containers/NewCategory/NewCategory';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={'Home'} />
        <Route path='/transaction-add' element={'Add new transaction'} />
        <Route path='/transaction/:id/edit' element={'Edit transaction'} />
        <Route path='/categories' element={<Category />} />
        <Route path='/category-add' element={<NewCategory />} />
        <Route path='/categorie/:id/edit' element={'Edit Category'} />
        <Route path='*' element={'Not Found'} />
      </Routes>
    </Layout>
  );
};

export default App;