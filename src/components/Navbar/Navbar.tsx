import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand fw-bolder' href='/'>
          Finance tracker
        </a>
        <ul className='navbar-nav me-auto flex-row gap-2 flex-nowrap'>
          <li className='nav-item'>
            <NavLink to='/transaction-add' className='nav-link'>New Transaction</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/categories' className='nav-link'>Categories</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;