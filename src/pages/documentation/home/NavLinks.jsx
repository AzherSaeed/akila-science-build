import React from 'react';
import { AppBar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import pagesText from './pagesText';

export default function NavLinks() {
  // The negative 15vh marginTop offsets the marginTop applied to all pages in
  // app.js
  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#171747',
            padding : '15px 37px',
            borderRadius : '5px',
            overflowX : 'auto',
            whiteSpace : 'nowrap',
        }}
      >
        {pagesText.map((page) => (
          <Link style={{textDecoration : 'none' }} to={{ pathname: `/documentation/ + ${page.id}` }} key={page.id}>
            <Button
              key={page.dashboardLink}
              sx={{
                color: 'white',
                fontSize: '20px',
              }}
            >
              {page.text}
            </Button>
          </Link>
        ))}
      </AppBar>
    </Box>
  );
}
