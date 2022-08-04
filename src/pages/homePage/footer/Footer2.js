import React from 'react';
import { logo, sideLine } from '@assets';
import { Box, Container, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer2() {
  return (
    <Box mt="6.5rem" id="footer-main2">
      <Container>
        <Box
          display={{
            xs: 'none',
            md: 'unset',
          }}
          className="footer2-img-sideline"
        >
          <img src={sideLine} alt="sideLine" />
        </Box>
        <Grid container columnSpacing={3} rowSpacing={3} className="footer-inner">
          <Grid
            item
            xs={12}
            sm={5}
            lg={4}
            mr={{
              xs: '0',
              lg: '12rem',
            }}
            className="section-1 "
          >
            <Box display="flex" alignItems="center" className="logo-heading">
              <Link to="/">
                <img src={logo} alt="data-science-logo" />
              </Link>
              <p className="nav-heading ">Akila Analytics</p>
            </Box>
            <Box pt="9rem" display="hidden" />
          </Grid>
          <Grid item xs={12} sm={5} lg={2}>
            <p className="link-heading "> Useful Links</p>
            <ul className="section-3 fix-height">
              <li>
                {' '}
                <a id="aLink" href="/documentation">
                  Documentation
                </a>{' '}
              </li>
              <li>
                {' '}
                <a id="aLink" href="/privacy-policy">
                  Privacy Policy
                </a>{' '}
              </li>
              <li>
                {' '}
                <a id="aLink" href="/terms-and-conditions">
                  Terms & Condition{' '}
                </a>{' '}
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box mt="4.3rem">
          <Divider color="#E3E3E3" />
          <Box>
            <p className="copyright">© All rights reserved.</p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
