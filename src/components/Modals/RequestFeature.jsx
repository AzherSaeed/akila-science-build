import React, { useState } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import ModalHeader from './ModalHeader';
import ModalTextField from './ModalTextField';

function RequestFeature() {
  const [name, setName] = useState('Brandon Goldney');
  const [email, setEmail] = useState('BrandonGoldney@gmail.com');
  const theme = useTheme();
  return (
    <div>
      <ModalHeader title="Request a Feature" />
      <Box sx={{ marginLeft: '5%', padding: '1vh' }}>
        <ModalTextField width="20vw" fontSize="15" label="Name" value="Brandon Goldney" />
        <ModalTextField width="20vw" fontSize="15" label="Email" value="BrandonGoldney@gmail.com" />
        <ModalTextField
          width="35vw"
          height="20vh"
          label="Request Feature"
          value={undefined}
          fontSize="15"
          multiline="multiline"
          rows="7"
        />

        <br />
        <br />

        <Button variant="raised" component="span">
          Upload Image
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
      <br /> <br />
    </div>
  );
}

export default RequestFeature;
