import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from './DataScientist.module.css';

function FeaturesBox(props) {
  const { title, description, image } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      margin="2% 2%"
      maxHeight="auto"
      width={matches ? '100vw' : '35vw'}
      backgroundColor="#f1f5f8"
      borderRadius="7px"
      padding={matches ? '5%' : ''}
    >
      <Box maxWidth="58px" height="auto" paddingBottom="25px">
        <img id={styles.FeaturesImage} src={image} alt="" />{' '}
      </Box>
      <Box paddingBottom="16px">
        <Typography
          color="#3C3C3C"
          fontSize="20px"
          fontWeight="600"
          fontFamily="Raleway"
          lineHeight="25px"
          variant="solutionsFeaturesBoxTitle"
        >
          {title}
          <br />
        </Typography>
      </Box>
      <Typography
        fontFamily="Raleway"
        fontSize="16px"
        lineHeight="22px"
        color="#3C3C3C"
        fontWeight="400"
        variant="solutionsFeaturesBoxDescription"
      >
        {description}
      </Typography>
    </Box>
  );
}

export default FeaturesBox;
