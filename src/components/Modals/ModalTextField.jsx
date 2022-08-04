import React from 'react';
import { TextField } from '@mui/material';

export default function ModalTextField(props) {
  const { width, height, label, value, fontSize, rows } = props;
  return (
    <div>
      <TextField
        style={{
          width,
          height,
          marginBottom: '1vh',
        }}
        type="text"
        label={label}
        value={value}
        InputProps={{ style: { fontSize } }}
        InputLabelProps={{
          style: { fontSize },
        }}
        variant="outlined"
        multiline
        rows={rows}
      />
    </div>
  );
}
