import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RequestDemoLogo as logo , bars, times } from '@assets';
import {BlueButtonContainer} from "@components/Buttons/BlueButton";
import {Container} from "@mui/material";
import NavBarContainer from './styles';


const Index = () => {
  const [navToggler, setnavToggler] = useState(false);





  return (
    <NavBarContainer>
      <Container sx={{ maxWidth: '1330px' }} maxWidth={false} disableGutters>
        <navbar className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-outer">
            <div className={navToggler ? 'navbar-navItem toggler-active' : 'navbar-navItem'}>
              <NavLink style={{textDecoration : 'none'}} exact activeClassName="active" to="about-us">
                About
              </NavLink>
              <NavLink style={{textDecoration : 'none'}} activeClassName="active" to="use-cases">
                Use Cases
              </NavLink>
              <NavLink  style={{textDecoration : 'none'}} activeClassName="active" to="demos">
                Demos
              </NavLink>
              <NavLink style={{textDecoration : 'none'}}  activeClassName="active" to="pricing">
                Pricing
              </NavLink>
              <NavLink style={{textDecoration : 'none'}} activeClassName="active" to="contact-us">
                Contact
              </NavLink>
                <NavLink to='#'>
                    <div className='navbar-nav--buttons' >
                        <BlueButtonContainer  >
                            Log In
                        </BlueButtonContainer>
                        <button type='button' className='navbar-bton-register' >Register</button>
                    </div>
                </NavLink>
            </div>

          </div>
            <div className='navbar-buttons' >
              <BlueButtonContainer  >
                Log In
              </BlueButtonContainer>
                <button type='button' className='navbar-bton-register' >Register</button>
            </div>
            <div className="navbar-toggler" onClick={() => setnavToggler(!navToggler)}>
              {navToggler ? <img src={times} alt="times" /> : <img src={bars} alt="bars" />}
            </div>
          </navbar>
        </Container>
      </NavBarContainer>



  );
};

export default Index;
