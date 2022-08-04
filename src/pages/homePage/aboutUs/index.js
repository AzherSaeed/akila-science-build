import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { aboutUs } from '@assets';
import BlueLine from '@components/BlueLine/';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <Box className={styles.AboutUsMain}>
      <Container className={styles.AboutUs}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          id="about-us"
          columnGap={10}
          rowGap="3rem"
        >
          <Grid item md={5}>
            <img src={aboutUs} alt="about-us" />
          </Grid>

          <Grid item md={6} className={styles.TextArea}>
            <h2 className={styles.heading}>About Us</h2>
            <Box mt={2}>
              <BlueLine />
            </Box>
            <p className={styles.SubHeading}>
              Akila was built to solve modern-day challenges that are ubiquitous across all
              businesses. Our world is increasingly driven by data. Today, executives aim to consume
              and clearly understand their businesses at an increasingly granular level.
              <br />
              <br />
              A data-driven approach is not an easy feat. Internal data is often combined with
              external data, data must be cleaned and transformed, sometimes predictions are made on
              data to provide forward looking guidance on key metrics. Often, all of this data must
              be condensed into a few slides or charts that clearly communicate the business story.
              <br />
              <br />
              This is the problem Akila Analytics aims to solve. User friendly business analytics
              that are helping communicate the story.
            </p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
