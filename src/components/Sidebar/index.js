import React, { useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import './Sidebar.css';

export default function Sidebar() {
  useEffect(() => {
    document.getElementById('sidebar-default-btn').style.border =
      '2px solid rgba(255, 255, 255, 0.08)';
    document.getElementById('sidebar-default-btn').style.background = 'rgba(255, 255, 255, 0.08)';
  }, []);
  const handleChange = () => {
    document.getElementById('sidebar-default-btn').style = null;
  };
  return (
    <Box
      mt={{ xs: '0rem', sm: '0rem' }}
      height={{ lg: '100vh', xs: '100%' }}
      className="sidebar-main"
    >
      <Stack
        direction={{ xs: 'column', sm: 'row', md: 'column' }}
        className="sidebar-btns"
        gap={{
          xs: '1rem',
          lg: '2rem',
        }}
        p="2rem"
      >
        <input
          type="radio"
          id="General Models"
          name="3"
          onClick={(e) => handleChange(e.target.value)}
          value="General Models"
        />
        <label id="sidebar-default-btn" htmlFor="General Models">
          General Models
        </label>
        <input
          type="radio"
          id="Deep Learning"
          name="3"
          onClick={(e) => handleChange(e.target.value)}
          value="Deep Learning"
        />
        <label htmlFor="Deep Learning">Deep Learning</label>
        <input
          type="radio"
          id="Correlation"
          onClick={(e) => handleChange(e.target.value)}
          name="3"
          value="Correlation"
        />
        <label htmlFor="Correlation">Correlation</label>
        <input
          type="radio"
          id="Topic Modeling"
          onClick={(e) => handleChange(e.target.value)}
          name="3"
          value="Topic Modeling"
        />
        <label htmlFor="Topic Modeling">Topic Modeling</label>
        {/* <button id='sidebar-default-btn' onClick={()=>handleChange()}>General Models</button>
      <button onClick={()=>handleChange()}>Deep Learning</button>
      <button onClick={()=>handleChange()}>Correlation</button>
      <button onClick={()=>handleChange()}>Topic Modeling</button> */}
      </Stack>
    </Box>
  );
}
