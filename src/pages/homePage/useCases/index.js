import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { BlueLine } from '@components';
import Template from './Template';
import useCasesText from './useCasesText';

export default function UseCases() {
  return (
    <div>
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
            Use Cases
          </Typography>
          <BlueLine />
        </Box>
        <Box>
          <Container sx={{ maxWidth: '1126px' }} maxWidth={false} disableGutters>
            <Grid container justifyContent="center" columnSpacing={4} rowSpacing={2}>
              <Grid item sm={12} md={6} lg={4}>
                <Template
                  title={useCasesText.privateEquity.title}
                  description={useCasesText.privateEquity.description}
                  image={useCasesText.privateEquity.image}
                  path={useCasesText.privateEquity.path}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <Template
                  title={useCasesText.marketingAnalytics.title}
                  description={useCasesText.marketingAnalytics.description}
                  image={useCasesText.marketingAnalytics.image}
                  path={useCasesText.marketingAnalytics.path}
                />
              </Grid>

              <Grid item sm={12} md={6} lg={4}>
                <Template
                  title={useCasesText.customerProfitability.title}
                  description={useCasesText.customerProfitability.description}
                  image={useCasesText.customerProfitability.image}
                  path={useCasesText.customerProfitability.path}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
