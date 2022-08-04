import * as React from 'react';

import '../dataProcessing/methods/Select.css';

export default function SelectModel({ options, sendModelValue }) {
  const handleChange = (event) => {
    sendModelValue(event.target.value);
  };
  return (
    <select
      onChange={(event) => handleChange(event)}
      defaultValue={options[0]}
      className="select"
      id="country"
      name="country"
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
