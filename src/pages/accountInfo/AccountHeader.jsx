import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function AccountHeader(props) {
  const { showProfile, setShowProfile } = props;
  const profileBorder = showProfile ? 5 : 0;
  const licenseBorder = showProfile ? 0 : 5;

  useEffect(() => {}, [showProfile]);
  return (
    <Box>
      <Typography variant="h2" color="white">
        Account
      </Typography>
      <Box
        width="30vw"
        display="flex"
        justifyContent="space-around"
        sx={{
          borderBottom: 1,
          borderColor: 'white',
        }}
      >
        <Typography
          fontSize={35}
          color="white"
          sx={{
            cursor: 'pointer',
            borderBottom: profileBorder,
            borderColor: 'lightBlue.main',
            borderRadius: 1,
          }}
        >
          <Button variant="text" onClick={() => setShowProfile(!showProfile)} name="ProfileButton">
            Profile
          </Button>
        </Typography>
        <Typography
          fontSize={35}
          color="white"
          sx={{
            cursor: 'pointer',
            borderBottom: licenseBorder,
            borderColor: 'lightBlue.main',
            borderRadius: 1,
          }}
        >
          <Button variant="text" onClick={() => setShowProfile(!showProfile)}>
            License
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
