import React from 'react'
import { RequestADemo } from '@components';
import { privateEqualityBanner  } from '@assets';
import {Box, Container, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import SolutionDetailContainer from './style'

import privateEquityText from './privateEquityText';
import CustomBox from './CustomBox';
import CustomHeader from './CustomHeader';

export default function PrivateEquity() {




  return (
    <Box>
      <CustomHeader
        title="Private Equity"
        description="
            Explore how Akila is increasing efficiency during the due diligence
          process"
        backgroundImage={privateEqualityBanner}
      />

      <Container  sx={{ maxWidth:'1126px'  }} maxWidth={false} disableGutters>
        <Box my={10} mx={3} >
            <SolutionDetailContainer >
                <div className='solution-container-nav' >
                    <Box >
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: '#5A5A5A',
                                overflow:'auto',
                                whiteSpace:'nowrap',
                            }}
                            display="flex"
                            justifyContent="space-between"
                            flexDirection="row"
                            gap={3}
                        >
                            <Typography  variant="h6"   component={Link} to='#challenge' style={{ padding: '1% 0%' }}>
                                Challenges
                            </Typography>
                            <Typography variant="h6"   component={Link}  to='#' style={{ padding: '1% 0%' }}>
                                Opportunities
                            </Typography>
                            <Typography variant="h6"   component={Link}  to='#' style={{ padding: '1% 0%' }}>
                                Solutions
                            </Typography>
                            <Typography variant="h6"   component={Link}  to='#advantage' style={{ padding: '1% 0%' }}>
                                Akila Advantage
                            </Typography>
                            <Typography variant="h6"   component={Link} to='#'  style={{ padding: '1% 0%' }}>
                                Getting Started
                            </Typography>
                        </Box>
                    </Box>
                </div>
                <div className='solution-container-content' >
                    <Box id='challenge' >
                        <CustomBox title="Challenge" body={privateEquityText.Challenge} />
                    </Box>

                    <Box>
                        <CustomBox title="Opportunity" body={privateEquityText.Opportunity} />
                    </Box>
                    <Box id='advantage' >
                        <CustomBox title="Akila Advantage" body={privateEquityText.akilaAdvantage} />
                    </Box>
                </div>
            </SolutionDetailContainer>





        </Box>
      </Container>
        <RequestADemo />
    </Box>
  );
}
