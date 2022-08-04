import React from 'react';
import { Box } from '@mui/material';

export default function IncorrectPasswordMessage({ loginFailed, userIsNotConfirmed }) {
  const displayMessage = () => {
    if (loginFailed && !userIsNotConfirmed) {
      return (
        <Box color="red" backgroundColor="#f9dce3" borderRadius="10px" padding="3%">
          Login Failed: Your user ID or password is incorrect.
        </Box>
      );
    }
    return '';
  };
  return <div>{displayMessage()}</div>;
}
