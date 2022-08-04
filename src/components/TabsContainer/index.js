import React, { useState } from 'react';
import { Tabs, Tab, Divider } from '@mui/material';
import './TabsContainer.css';

export default function BasicTabs({ tabs, sendTabValue }) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    sendTabValue(event.target.innerText);
  };

  return (
    <>
      <Tabs
        variant="scrollable"
        indicatorColor="primary"
        className="tabs-container"
        value={value}
        onChange={handleChange}
      >
        {tabs.map((tab) => (
          <Tab style={{ color: '#e7e7e7' }} className="tab" key={tab} label={tab} />
        ))}
      </Tabs>
      <Divider color="#E3E3E3" />
    </>
  );
}
