import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';

export default function ButtonSwitch(props) {
  const { defaultValue, alternateValue } = props;
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <FormControlLabel
      control={<Switch checked={checked} />}
      label={checked ? alternateValue : defaultValue}
      onClick={handleChange}
    />
  );
}
