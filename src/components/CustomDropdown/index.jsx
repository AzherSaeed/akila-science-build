import React, { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';

export default function CustomDropdown(props) {
  const { label, value, items, onChangeFunc, borderRadius } = props;
  useEffect(() => {}, [value]);
  return (
    <Box >
      <FormControl
        fullWidth
        sx={{
          backgroundColor: 'white',
          borderRadius: borderRadius || '10px',
        }}
      >
        <InputLabel shrink={false}>{value === '' ? label : ''}</InputLabel>
        <Select
          value={value}
          onChange={(e) => {
            onChangeFunc(e.target.value);
          }}
        >
          {items.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
