import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Benefit from './benefit';
import Styles from './cardTemplate.module.css';
import {BlueButtonContainer} from "@components/Buttons/BlueButton";

export default function CardTemplate(props) {
  const { title, price, description, benefits, buttonText, path } = props;
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Box
        padding="20px 35px 20px 20px"
        sx={{
          backgroundColor: 'white',
          borderRadius: '7px',
          maxWidth: { xs: '100%', lg: '265px' },
          height: '100%',
          margin: '0 auto',
        }}
      >
        <Typography
          fontWeight="600"
          fontSize="16px"
          lineHeight="113.69%"
          color="#3C3C3C"
          marginBottom="12px"
        >
          {title}
        </Typography>
        <Typography
          className={Styles.cardPricing}
          minHeight="70px"
          s
          fontWeight="700"
          fontSize="30px"
          lineHeight="113.69%"
          color="#3C3C3C"
          marginBottom="24px"
        >
          {price}
        </Typography>
        <Typography
          className={Styles.cardDescription}
          fontWeight="500"
          fontSize="14px"
          lineHeight="129.69%"
          color="#3C3C3C"
          marginBottom="55px"
        >
          {description}
        </Typography>
        <Box>
          {benefits.map((benefit) => (
            <Box marginBottom="20px">
              <Benefit text={benefit} />
            </Box>
          ))}
        </Box>
          <BlueButtonContainer text="REQUEST A DEMO" path="/pricing"  >
              Try For Free
          </BlueButtonContainer>
      </Box>

    </Grid>
  );
}
