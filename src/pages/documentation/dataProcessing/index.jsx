import React from 'react';
import { Box, Typography } from '@mui/material';
import dataProcessingMethods from '@utils/dataProcessingMethods';
import ModelList from '../ModelList';

export default function DataProcessingHome() {
  return (
    <Box minHeight="100vh">
      <Typography variant="h1">Data Processing</Typography>
      <ModelList title="Data Processing Methods" models={dataProcessingMethods} />
    </Box>
  );
}
