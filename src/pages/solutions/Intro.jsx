import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Intro({ title, subheading }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      <Box paddingTop="75px" maxWidth={matches ? '100vw' : '100vw'}>
        <Box paddingBottom="17px">
          <Typography
            color="#E7E7E7"
            fontStyle="normal"
            lineHeight="45px"
            fontSize="40px"
            fontFamily="Raleway"
            fontWeight="600"
            variant="solutionsSubheading"
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            color="#E7E7E7"
            fontStyle="normal"
            lineHeight="25px"
            fontSize="18px"
            fontFamily="Raleway"
            fontWeight="500"
            variant="solutionsDescription"
          >
            {subheading} <br />
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
