import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LogInButton() {
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('login');
  };
  return (
    <div>
      <Box display={{ xs: 'none', lg: 'block' }} mr="1.5rem">
        <button onClick={moveToLogin} variant="contained" className="btn-blue" type="button">
          Log In
        </button>
      </Box>
      <Box display={{ xs: 'block', lg: 'none' }} mr="1.5rem">
        <button onClick={moveToLogin} variant="contained" className="btn-blue" type="button">
          Log In
        </button>
      </Box>
    </div>
  );
}

export default LogInButton;
