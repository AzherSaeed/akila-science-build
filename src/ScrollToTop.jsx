import React, { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

// Source for this code: this ensures new pages are always loaded at the top
// https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
/* eslint-disable react/jsx-no-useless-fragment */
export default function ScrollToTop({ children }) {
  const location = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    // scroll to top except when you click the back button
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return <>{children}</>;
}
