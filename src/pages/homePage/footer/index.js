import React from 'react';
import { logo, youTube, linkedin, insta, sideLine } from '@assets/index';
import { Box, Container, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const style = {
    container: {
      zIndex: 1600,
      opacity: 0,
    },
  };

  return (
    <Box mt="6.5rem" id="footer-main" className={style.container} sx={{ zIndex: '1600' }}>
      <Container sx={{ zIndex: '1600' }}>
        <Box
          display={{
            xs: 'none',
            md: 'unset',
          }}
          className="footer-img-sideline"
        >
          <img src={sideLine} alt="sideLine" />
        </Box>
        <Grid pt={10} container columnSpacing={3} rowSpacing={3} className="footer-inner">
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
            <Box mt="4rem" display="flex" alignItems="center" className="logo-heading">
              <Link to="/">
                <img src={logo} alt="data-science-logo" />
              </Link>
              <p className="nav-heading ">Akila Analytics</p>
            </Box>
            <Box pt={2}>
              <p className="description">
                Volutpat pellentesque molestie sed erat porta scelerisque massa augue. Elementum in
                malesuada sit nullam tortor consequat, elit quisque enim. Nisl, nec in consectetur
                felis odio. Volutpat pellentesque molestie sed erat porta scelerisque massa augue.
                Elementum in{' '}
              </p>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            lg={2}
            mr={{
              xs: '0',
              lg: '15rem',
            }}
          >
            <p className="link-heading "> Useful Links</p>
            <ul className="section-3 fix-height">
              <li>
                {' '}
                <a id="aLink" href="/about-us">
                  About Us
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
                  Terms & Conditions
                </a>{' '}
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} lg={2} className="section-4 ">
            <p className="link-heading social-links">Social Links</p>
            <div className="footer-icons fix-height">
              <a id="aLink" href="">
                <img src={youTube} className="footer-icon" alt="YouTube" />
              </a>
              <a id="aLink" href="">
                <img src={insta} className="footer-icon" alt="Instagram" />
              </a>
              <a id="aLink" href="">
                <img src={linkedin} className="footer-icon" alt="LinkedIn" />
              </a>
            </div>
          </Grid>
        </Grid>
        <Box mt="4.3rem">
          <Divider style={{ background: '#E3E3E3' }} variant="middle" />
          <Box pb="4rem">
            <p className="copyright">© All rights reserved.</p>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
