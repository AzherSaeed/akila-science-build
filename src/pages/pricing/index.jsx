import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import pricingText from './pricingText';
import { starterRedirectToCheckout } from './stripeHelperFunc';
import CardTemplate from './CardTemplate';

export default function Pricing() {
  const { free, starter, professional, enterprise } = pricingText;

  return (
    <Box maxWidth="1110px" margin="0 auto">
      <Typography
        fontSize="40px"
        color="#E3E3E3"
        fontWeight="600"
        fontFamily="Raleway"
        lineHeight="113.69%"
        marginBottom="68px"
      >
        Platforms and Plans
      </Typography>
      <Box sx={{ padding: { xs: '0px 8px', lg: '0px' } }}>
        <Grid container spacing={3}>
          <CardTemplate
            title={free.title}
            price={free.price}
            description={free.description}
            benefits={free.benefits}
            buttonText={free.buttonText}
            path="/login?register=1"
          />
          <CardTemplate
            title={starter.title}
            price={starter.price}
            priceCaption=""
            description={starter.description}
            benefits={starter.benefits}
            buttonText={starter.buttonText}
            path="/payment"
            starterRedirectToCheckout={starterRedirectToCheckout}
          />
          <CardTemplate
            title={professional.title}
            price={professional.price}
            priceCaption={professional.priceCaption}
            description={professional.description}
            benefits={professional.benefits}
            buttonText={professional.buttonText}
            path="/contact-us"
          />
          <CardTemplate
            title={enterprise.title}
            price={enterprise.price}
            priceCaption={enterprise.priceCaption}
            description={enterprise.description}
            benefits={enterprise.benefits}
            buttonText={enterprise.buttonText}
            path="/contact-us"
          />
        </Grid>
      </Box>
    </Box>
  );
}
