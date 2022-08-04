import React, { useContext } from 'react';
import { Slide, Toolbar, Typography } from '@mui/material';
import { LoginDispatchContext } from '@contexts';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Navbar from './Navbar';
import DashboardNavbar from './DashboardNavbar';

function DocumentationNavbar() {
  const { isLoggedIn } = useContext(LoginDispatchContext);
  const trigger = useScrollTrigger();
  const controller = () => {
    if (isLoggedIn) {
      return <DashboardNavbar />;
    }
    return <Navbar />;
  };

  return (
    <div>
      <Slide
        appear={false}
        direction="down"
        in={!trigger}
        sx={{ minHeight: '15vh', maxHeight: '15vh', width: '100vw' }}
      >
        <Toolbar sx={{}}>{controller()}</Toolbar>
      </Slide>
      <div>
        <Typography
          backgroundColor="myPurple.main"
          color="white"
          variant="h2"
          fontWeight="600"
          textAlign="center"
          marginTop="10vh"
          height="20vh"
          paddingTop="5vh"
        >
          Documentation
        </Typography>
      </div>
    </div>
  );
}

export default DocumentationNavbar;
