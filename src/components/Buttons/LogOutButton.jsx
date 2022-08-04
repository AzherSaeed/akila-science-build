import React from 'react';
import { Box } from '@mui/material';

function LogOutButton(props) {
  const { onClick } = props;

  return (
    <div>
      <Box display={{ xs: 'block', lg: 'none' }} mr="1.5rem">
        <button type="button" onClick={() => onClick()} variant="contained" className="btn-blue">
          Log Out
        </button>
      </Box>
      <Box display={{ xs: 'none', lg: 'block' }} mr="1.5rem">
        <button type="button" onClick={() => onClick()} variant="contained" className="btn-blue">
          Log Out
        </button>
      </Box>
    </div>
  );
}

export default LogOutButton;
