import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import NavbarController from '@components/Navbar/NavbarController';
import Footer from '@pages/homePage/footer';
import Router from '@routes';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from '@theme';
import themeStyledComponents from '@theme/Global/';
import ScrollToTop from './ScrollToTop';
import { LoginContextProvider } from './contexts';
import './App.css';

console.log(themeStyledComponents, '<<< themeStyledComponents');

function App() {
  return (
    <LoginContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledComponentsThemeProvider theme={themeStyledComponents}>
          <ScrollToTop>
            <NavbarController />
            <Box marginTop="15vh" color="white">
              <Router />
            </Box>
            <Footer />
          </ScrollToTop>
        </StyledComponentsThemeProvider>
      </ThemeProvider>
    </LoginContextProvider>
  );
}

export default App;
