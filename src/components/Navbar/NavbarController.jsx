import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LoginDispatchContext } from '@contexts';
import DashboardNavbar from './DashboardNavbar';
import DocumentationNavbar from './DocumentationNavbar';
import Navbar from './Navbar';

function NavbarController() {
  const location = useLocation();
  const documentationPage = location.pathname === '/documentation';
  const { isLoggedIn } = useContext(LoginDispatchContext);

  const controller = () => {
    if (documentationPage) {
      return <DocumentationNavbar />;
    }
    if (isLoggedIn) {
      return <DashboardNavbar />;
    }
    return <Navbar />;
  };

  return <>{controller()}</>;
}

export default NavbarController;
