import React from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="bg-success">
        Navbar
      </header>
      <main className='container'>
        {children}
      </main>
    </>
  );
};

export default Layout;