import React from 'react';
import {Container} from '@mui/material';
import NavLinks from './NavLinks';
import DisplayPages from './DisplayPages';

export default function Documentation() {
  return (
    <Container sx={{ maxWidth:'1330px'  }} maxWidth={false} disableGutters>
      <NavLinks />
      <DisplayPages />
    </Container>
  );
}
