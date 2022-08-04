import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { greenPlus } from '@assets/index';
import { NewWorkflowCard } from '@components';

export default function MachineLearningHome() {
  return (
    <Box>
      <Typography variant="h1">Machine Learning</Typography>
      <Grid container direction="row" alignItems="center" justify="center" marginTop="3vh">
        <Grid item md={6} lg={3}>
          <NewWorkflowCard
            title="Auto ML"
            image={greenPlus}
            path="/workflows/machine-learning/auto-ml"
          />
        </Grid>
        <Grid item md={6} lg={3}>
          <NewWorkflowCard
            title="Build a Model"
            image={greenPlus}
            path="/workflows/machine-learning/build-model"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
