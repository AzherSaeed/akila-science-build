import React from 'react';
import { RequestADemo } from '@components';
import { customerProfitabilityBanner } from '@assets';
import {Box, Container} from '@mui/material';
import privateEquityText from './privateEquityText';
import CustomBox from './CustomBox';
import StickyNavbar from './StickyNavbar';
import CustomHeader from './CustomHeader';

export default function CustomerProfitability() {
    return (
    <Box>
      <CustomHeader
        title="Customer Profitability"
        description="
            Explore how Akila is increasing the effectiveness of pricing decisions"
        backgroundImage={customerProfitabilityBanner}
      />
      <Container>
          <StickyNavbar/>
          <CustomBox title="Challenge" body={privateEquityText.Challenge} />
        <CustomBox title="Akila Advantage" body={privateEquityText.akilaAdvantage} />
      </Container>
        <RequestADemo />

    </Box>
  );
}
