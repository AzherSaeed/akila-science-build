import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ModelList(props) {
  const { title, models } = props;
  return (
    <Box>
      <Typography color="white" variant="h5" fontWeight="500" marginLeft="10vw" marginTop="20vh">
        {title}
      </Typography>
      {models.map((item) => (
        <Box
          color="white"
          sx={{
            borderBottom: '1px solid rgba(220,220,220, .5)',
          }}
          maxWidth="50vw"
          marginLeft="10vw"
          marginTop="3vh"
          display="flex"
          justifySelf="space-between"
          key={item.path}
        >
          <Box width="20vw" minWidth="20vw">
            <Link
              to={{
                pathname: item.path,
              }}
            >
              <Typography color="white" sx={{ cursor: 'pointer', paddingRight: '1vw' }}>
                {item.name}
              </Typography>
            </Link>
          </Box>
          <Box display="flex" justifyContent="flex-start">
            {item.description}
          </Box>{' '}
        </Box>
      ))}
    </Box>
  );
}
export default ModelList;
