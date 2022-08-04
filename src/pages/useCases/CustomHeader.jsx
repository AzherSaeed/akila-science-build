import React from 'react';
import { Box, Typography } from '@mui/material';
import { BlueLine } from '@components';

export default function CustomHeader(props) {
  const { title, description, backgroundImage } = props;
  return (
    <div>
      <Box
        justifyContent="center"
        flexDirection="column"
        display="flex"
        alignItems="center"
        justify-content="center"
        mb={5}
      >
        <Typography mb={2} variant="h1">{title}</Typography>
        <Typography fontSize={20} mb={2} >{description}</Typography>

        <BlueLine />
      </Box>

      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '372px',
          width: '100%',
        }}
      />

      <Box />
    </div>
  );
}
