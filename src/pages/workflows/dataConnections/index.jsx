import React from 'react';
import { Grid, Typography } from '@mui/material';
import { greenPlus } from '@assets/index';
import { NewWorkflowCard } from '@components';

function DataConnections() {
  return (
    <div>
      <Typography variant="h1">Data Connections</Typography>
      Note: data connections are not project specific; all data connections are listed here.
      <Grid container direction="row" alignItems="center" justify="center" marginTop="3vh">
        <Grid item md={6} lg={3}>
          <NewWorkflowCard title="Connect to AWS Data" image={greenPlus} />
        </Grid>
        <Grid item md={6} lg={3}>
          <NewWorkflowCard title="Upload Local File" image={greenPlus} />
        </Grid>
      </Grid>
    </div>
  );
}

export default DataConnections;
