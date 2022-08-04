import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function ModalHeader(props) {
  const { title } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '40vw',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" color="white" fontWeight="400" padding="2%">
        {title} <br />
      </Typography>
    </Box>
  );
}

export default ModalHeader;
