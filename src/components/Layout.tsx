import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet/>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
