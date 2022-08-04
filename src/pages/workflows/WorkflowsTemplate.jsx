import React from 'react';
import { Box } from '@mui/material';
import LeftNavbar from '@components/LeftNavbar/LeftNavbar';

export default function WorkflowsTemplate() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box display="flex" marginTop="5vh">
        <LeftNavbar />
        <Box flex={1} marginLeft="5%">
          Test
        </Box>
      </Box>
    </Box>
  );
}
