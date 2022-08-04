import React from 'react';
import { greenPlus } from '@assets/index';
import { Grid, Typography } from '@mui/material';
import { NewWorkflowCard } from '@components';

export default function Visualizations() {
  return (
    <div>
      <Typography variant="h1">Visualizations</Typography>
      <Grid container direction="row" alignItems="center" justify="center" marginTop="3vh">
        <Grid item md={6} lg={3}>
          <NewWorkflowCard
            title="Create New Chart"
            image={greenPlus}
            path="/workflows/visualizations/new-chart"
          />
        </Grid>
        <Grid item md={6} lg={3}>
          <NewWorkflowCard
            title="Create Dashboard"
            image={greenPlus}
            path="/workflows/visualizations/new-dashboard"
          />
        </Grid>
        <Grid item md={6} lg={3}>
          <NewWorkflowCard title="Build with AWS QuickSight" image={greenPlus} />
        </Grid>
      </Grid>
    </div>
  );
}
