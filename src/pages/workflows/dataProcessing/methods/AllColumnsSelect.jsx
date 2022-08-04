import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { DataProcessingContext } from '@contexts/DataProcessingContext';

function AllColumnsSelect({ title, handleChange, value }) {
  const { columnNames } = useContext(DataProcessingContext);
  const initialValue = value || '';
  const [selectedColumn, setSelectedColumn] = useState(initialValue);

  useEffect(() => {
    handleChange(selectedColumn);
  }, [selectedColumn]);

  return (
    <div>
      <Typography variant="textBody">
        {title} <br />
      </Typography>
      <FormControl
        sx={{ minWidth: 120, color: 'white', marginTop: '1vh' }}
        variant="outlined"
        color="primary"
      >
        <InputLabel
          id="demo-simple-select-standard-label"
          sx={{ color: 'white' }}
          shrink={false}
          label={selectedColumn === '' ? selectedColumn : 'Select a column'}
          InputLabelProps={{
            shrink: false,
            style: {
              color: 'black',
            },
          }}
        >
          {selectedColumn === '' ? 'Select a column:' : ''}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          variant="outlined"
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
          label="Age"
          sx={{
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
            '& .MuiSelect-select': {
              color: 'white',
            },
            minWidth: '20vw',
          }}
          MenuProps={{
            sx: {
              '&& .Mui-selected': {
                color: 'black',
              },
            },
          }}
        >
          {columnNames.map((col) => {
            console.log(col, '<<< col');
            return (
              <MenuItem value={col} key={col}>
                {col}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default AllColumnsSelect;
