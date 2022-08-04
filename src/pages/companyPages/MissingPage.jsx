import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { rocketMan } from '@assets';

export default function MissingPage() {
  const navigate = useNavigate();
  return (
    <Box display="flex">
      <Box
        marginTop="20vh"
        minHeight="30vh"
        maxHeight="50vh"
        minWidth="40vw"
        maxWidth="60vw"
        sx={{
          backgroundImage: `url(${rocketMan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box padding="15% 10%">
        <Typography variant="h5">
          Uh Oh! You&apos;re Lost <br /> <br />
        </Typography>
        The page you are looking for does not exist. How you got here is a mystery. <br /> But you
        can click the button below to go back to the homepage. <br /> <br />
        <Button
          variant="text"
          sx={{
            '&.MuiButton-text': { color: '#FFFFFF' },
            border: '2px white solid',
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
}
