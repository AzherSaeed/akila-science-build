import React, { useState, useEffect } from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import Login from './Login';
import Register from './Register';
import styles from './Login.module.css';

export default function LoginRegisterForms() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [loginRegister, setLoginRegister] = useState('Login');
  const loginClicked = () => {
    if (loginRegister === 'Register') {
      setLoginRegister('Login');
    }
  };
  const registerClicked = () => {
    if (loginRegister === 'Login') {
      setLoginRegister('Register');
    }
  };

  useEffect(() => {
    /* eslint-disable-next-line no-unused-expressions */
    window.location.href.includes('register=1') ? setLoginRegister('Register') : '';
  }, []);

  return (
    <div className={styles.Login}>
      <Box display="flex" width={matches ? '50vw' : '30vw'} marginLeft="auto" marginRight="auto">
        <Button
          variant={loginRegister === 'Login' ? 'contained' : 'outlined'}
          fullWidth
          onClick={loginClicked}
          sx={{ width: matches ? '45vw' : '15vw', borderRadius: '15px' }}
        >
          Log In
        </Button>
        <Button
          variant={loginRegister === 'Login' ? 'outlined' : 'contained'}
          fullWidth
          onClick={registerClicked}
          sx={{ width: matches ? '45vw' : '15vw', borderRadius: '15px' }}
        >
          Register
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width={matches ? '90vw' : '30vw'}
        marginLeft="auto"
        marginRight="auto"
      >
        {loginRegister === 'Login' && (
          <Login
            loginRegister={loginRegister}
            loginClicked={loginClicked}
            registerClicked={registerClicked}
          />
        )}
        {loginRegister === 'Register' && (
          <Register
            loginRegister={loginRegister}
            loginClicked={loginClicked}
            registerClicked={registerClicked}
          />
        )}
      </Box>
    </div>
  );
}
