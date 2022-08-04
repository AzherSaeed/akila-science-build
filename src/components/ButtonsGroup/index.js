import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import './ButtonsGroup.css';

export default function ButtonGroup() {
  useEffect(() => {
    document.getElementById('btn-group-default-btn').style.border = '2px solid #3134DB';
  }, []);
  const handleChange = () => {
    document.getElementById('btn-group-default-btn').style = null;
  };
  return (
    <Stack mt={3} direction={{ xs: 'column', md: 'row' }} className="btns-group" gap={3}>
      <input
        type="radio"
        id="Regression"
        onClick={(e) => handleChange(e.target.value)}
        name="1"
        value="Regression"
      />
      <label id="btn-group-default-btn" htmlFor="Regression">
        Regression
      </label>
      <input
        type="radio"
        id="Classification"
        onClick={(e) => handleChange(e.target.value)}
        name="1"
        value="Classification"
      />
      <label htmlFor="Classification">Classification</label>
      <input
        type="radio"
        id="Unsupervised"
        onClick={(e) => handleChange(e.target.value)}
        name="1"
        value="Unsupervised"
      />
      <label htmlFor="Unsupervised">Unsupervised</label>
    </Stack>
  );
}
