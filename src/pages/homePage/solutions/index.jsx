import React from 'react';
import { BlueLine } from '@components';
import { Box, Container, Grid, Typography } from '@mui/material';
import Template from './Template';
import solutionsText from './solutionsText';

export default function Solutions() {
  const { businessAnalyst, dataScientist, itOperations, softwareEngineer } = solutionsText;
  return (
    <Container sx={{ maxWidth: '1126px' }} maxWidth={false} disableGutters>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justify-content="center"
          className="usecase-container"
          mb={6}
        >
          <Typography mb={2} variant="solutionsSubheading">
            Solutions By Position
          </Typography>
          <Box>
            <BlueLine />
          </Box>
        </Box>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          columnSpacing={3}
          rowSpacing={3}
        >
          <Grid item md={6} lg={3}>
            <Template
              title={businessAnalyst.title}
              description={businessAnalyst.description}
              logo={businessAnalyst.logo}
              path={businessAnalyst.path}
            />
          </Grid>
          <Grid item md={6} lg={3}>
            <Template
              title={dataScientist.title}
              description={dataScientist.description}
              logo={dataScientist.logo}
              path={dataScientist.path}
            />
          </Grid>
          <Grid item md={6} lg={3}>
            <Template
              title={softwareEngineer.title}
              description={softwareEngineer.description}
              logo={softwareEngineer.logo}
              path={softwareEngineer.path}
            />
          </Grid>
          <Grid item md={6} lg={3}>
            <Template
              title={itOperations.title}
              description={itOperations.description}
              logo={itOperations.logo}
              path={itOperations.path}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
