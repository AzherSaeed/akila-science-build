import React from 'react';
import { Box, Typography } from '@mui/material';
import {Link} from "react-router-dom";

function StickyNavbar() {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: '#5A5A5A',
        overflow:'auto',
        whiteSpace:'nowrap',
      }}
      mt={6}
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      gap={3}
    >
      <Typography  variant="h6"    style={{ padding: '1% 0%' }}>
        Challenges
      </Typography>
      <Typography variant="h6"    style={{ padding: '1% 0%' }}>
        Opportunities
      </Typography>
      <Typography variant="h6"   style={{ padding: '1% 0%' }}>
        Solutions
      </Typography>
      <Typography variant="h6"    style={{ padding: '1% 0%' }}>
        Akila Advantage
      </Typography>
      <Typography variant="h6"   style={{ padding: '1% 0%' }}>
        Getting Started
      </Typography>
    </Box>
  );
}

export default StickyNavbar;
