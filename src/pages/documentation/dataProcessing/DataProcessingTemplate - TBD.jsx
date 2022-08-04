import React from 'react';
import { Box } from '@mui/material';
import DocumentationLeftNavbar2 from '@components/LeftNavbar/DocumentationLeftNavbar2';

function DataProcessingTemplate({ props }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box display="flex">
        <DocumentationLeftNavbar2 />
        <Box flex="1">Test</Box>
      </Box>
    </Box>
  );
}

export default DataProcessingTemplate;
