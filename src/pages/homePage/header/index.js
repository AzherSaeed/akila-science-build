import React from 'react';
import { sideLine } from '@assets';
import { Box, Container } from '@mui/material';
import './Header.css';

export default function Header() {
  return (
    <div id="hero-main">
      <div className="hero-container">
        <Box
          display={{
            xs: 'none',
            lg: 'unset',
          }}
        >
          <div className="hero-img-container">
            <img src={sideLine} alt="sideLine" />
          </div>
        </Box>
        <Box
          display={{
            xs: 'none',
            lg: 'unset',
          }}
        >
          <div className="hero-img-container1">
            <img src={sideLine} alt="sideLine" />
          </div>
        </Box>

        <Container>
          <div className="hero-title-length">
            <p className="hero-title"> Approachable Analytics for the Everyday Business</p>
          </div>
          <p className="hero-sub hero-sub-length">
            Akila Analytics is a thoughtful approach to modern-day analytics and management. Akila
            is designed to be user friendly, a user-centric approach is core to every product.
          </p>
          <p className="hero-sub hero-sub-length">
            Akila has been designed and curated to use on day one. Akila's value proposition is
            simple and clear: streamline modern day business analytics and increase the working
            relationships between analytics professionals and executives.
          </p>
        </Container>
      </div>
    </div>
  );
}
