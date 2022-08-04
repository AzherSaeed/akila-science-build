import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

function CustomBox(props) {
  const { title, body } = props;
  const matches = useMediaQuery('(max-width:1340px)');

  return (
    <Box
      display="flex"
      height="auto"
      my={7}
      variant="custom"
      flexDirection={matches ? 'column' : 'row'}
    >
      <Box minWidth="25%"  variant="custom">
        <Typography fontWeight={600} fontSize={40}>{title}</Typography>
      </Box>
      <Typography fontSize={18} fontWeight={400} fontFamily='Raleway' >
        {body}
      </Typography>
    </Box>
  );
}

export default CustomBox;
