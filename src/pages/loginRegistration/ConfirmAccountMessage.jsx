import React from 'react';
import { Box, Button, TextField } from '@mui/material';

export default function ConfirmAccountMessage({
  userIsNotConfirmed,
  confirmationCode,
  setConfirmationCode,
}) {
  const displayMessage = () => {
    if (userIsNotConfirmed) {
      return (
        <div>
          <div style={{ display: userIsNotConfirmed ? 'display' : 'none' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label={confirmationCode === '' ? 'Confirmation Code' : ''}
              sx={{
                input: {
                  color: 'black',
                  background: 'white',
                },
              }}
              type="number"
              id="confirmationCode"
              onChange={(e) => setConfirmationCode(e.target.value)}
              value={confirmationCode}
            />
          </div>

          <Box color="red" backgroundColor="#f9dce3" borderRadius="10px" padding="3%">
            It appears your account is not confirmed. Please enter the code you received via email
            in the form above. If you need this code resent to you, please click here.
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(e) => onSubmit(e)}
          >
            Log In
          </Button>
        </div>
      );
    }
    return '';
  };
  return <div>{displayMessage()}</div>;
}
