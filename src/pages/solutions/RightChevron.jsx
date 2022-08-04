import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import { ChevronRightArrow } from '@assets';
import styles from './DataScientist.module.css';

function RightChevron() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      display={matches ? 'none' : 'flex'}
      marginTop="auto"
      marginBottom="auto"
      justifyContent="center"
    >
      <img className={styles.SolutionsImage} src={ChevronRightArrow} alt="" />{' '}
    </Box>
  );
}

export default RightChevron;
