import React from 'react';
import { Box, Typography } from '@mui/material';
import { classificationModels, regressionModels } from '@utils/machineLearningModels';
import ModelList from '../ModelList';

export default function MachineLearningHome() {
  return (
    <Box>
      <Typography variant="h1">Machine Learning</Typography>
      <ModelList title="Classification Models" models={classificationModels} />
      <Box marginTop="5vh">
        <ModelList title="Regression Models" models={regressionModels} />
      </Box>
    </Box>
  );
}
