import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from './DataScientist.module.css';

function WorkflowBox(props) {
  const { title, description, image } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box width="20vw">
      <Box display={matches ? 'none' : 'block'}>
        <img className={styles.SolutionsImage} src={image} alt="" />{' '}
      </Box>
      <Box textAlign="left" marginTop="5vh" width={matches ? '100vw' : 'auto'}>
        <Box paddingBottom="27px">
        <Typography fontSize="24px" fontWeight="500" lineHeight="27px" variant="solutionsWorkflowBoxTitle">
          {title}

        </Typography>
        </Box>
        <Typography variant="solutionsDescription">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default WorkflowBox;
