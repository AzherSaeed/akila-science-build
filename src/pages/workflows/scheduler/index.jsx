import React from 'react';
import { greenPlus } from '@assets/index';
import { Grid, Typography } from '@mui/material';
import { NewWorkflowCard } from '@components';

export default function Scheduler() {
  return (
    <div>
      <Typography variant="h1">Scheduler</Typography>
      <Grid container direction="row" alignItems="center" justify="center" marginTop="3vh">
        <Grid item md={6} lg={3}>
          <NewWorkflowCard
            title="Recurring Emails"
            image={greenPlus}
            path="/workflows/scheduler/scheduled-emails"
          />
        </Grid>
        <Grid item md={6} lg={3}>
          <NewWorkflowCard
            title="Recurring Data Processing"
            image={greenPlus}
            path="/workflows/scheduler/data-processing"
          />
        </Grid>
        <Grid item md={6} lg={3}>
          <NewWorkflowCard
            title="Recurring Machine Learning"
            image={greenPlus}
            path="/workflows/scheduler/machine-learning"
          />
        </Grid>
      </Grid>
    </div>
  );
}
