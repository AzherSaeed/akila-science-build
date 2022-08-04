import React from 'react';
import { TextField } from '@mui/material';

export default function CustomTextField(props) {
  const { name, label, type, onChangeFunc, multiline, rows, title } = props;
  const label2 = label === '' ? name : '';
  return (
    <>
      {title}
      <TextField
        // margin="normal"
        required
        name={name}
        value={label}
        label={label2}
        multiline={multiline}
        rows={rows}
        InputProps={{
          classes: {
            root: {
              borderColor: 'green',
              borderRadius: 50,
            },
          },
        }}
        InputLabelProps={{
          shrink: false,
          style: {
            color: 'black',
          },
        }}
        sx={{
          input: {
            color: 'black',
            background: 'white',
            borderRadius: '10px',
          },
        }}
        type={type}
        fullWidth
        autoComplete={type}
        onChange={(e) => onChangeFunc(e.target.value)}
      />
    </>
  );
}
