import React, { useState } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import ModalHeader from './ModalHeader';
import ModalTextField from './ModalTextField';

export default function ReportBug() {
  const [name, setName] = useState('Brandon Goldney');
  const [email, setEmail] = useState('BrandonGoldney@gmail.com');
  const theme = useTheme();
  return (
    <Box>
      <ModalHeader title="Report a Bug" />
      <br />
      <Box sx={{ marginLeft: ' 5%' }}>
        <ModalTextField width="20vw" fontSize="15" label="Name" value="Brandon Goldney" />
        <ModalTextField width="20vw" fontSize="15" label="Email" value="BrandonGoldney@gmail.com" />
        <br />
        <ModalTextField
          width="35vw"
          height="auto"
          minHeight="25vh"
          fontSize="40"
          label="Describe Situation"
          multiline="multiline"
          rows="5"
        />
        <ModalTextField
          width="35vw"
          height="20vh"
          fontSize="40"
          label="Expected Output"
          multiline="multiline"
          rows="5"
        />
        <ModalTextField
          width="35vw"
          height="20vh"
          fontSize="40"
          label="Actual Output"
          multiline="multiline"
          rows="5"
        />
        <Button variant="raised" component="span">
          Upload Image
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
      <br /> <br />
    </Box>
  );
}
