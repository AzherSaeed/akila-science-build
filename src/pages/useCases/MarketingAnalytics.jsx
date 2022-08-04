import React from 'react';
import { RequestADemo } from '@components';
import { marketingAnalysisBanner } from '@assets';
import { Box , Container} from '@mui/material';
import privateEquityText from './privateEquityText';
import CustomBox from './CustomBox';
import StickyNavbar from './StickyNavbar';
import CustomHeader from './CustomHeader';

export default function MarketingAnalytics() {
  return (
    <Box>
      <CustomHeader
        title="Marketing Analytics"
        description="
            Explore how Akila is parsing and making sense of marketing data."
        backgroundImage={marketingAnalysisBanner}
      />
      <Container>
        <StickyNavbar />
        <CustomBox title="Challenge" body={privateEquityText.Challenge} />
        <CustomBox title="Opportunity" body={privateEquityText.Opportunity} />
        <CustomBox title="Akila Advantage" body={privateEquityText.akilaAdvantage} />

      </Container>
        <RequestADemo />
    </Box>
  );
}
