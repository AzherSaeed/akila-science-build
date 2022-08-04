import React, { useEffect } from 'react';
import { Box, Divider, Tab, Tabs } from '@mui/material';
import { processLabels } from './text';

function ListTabs({ tab, setTab, setMethodsList }) {
  const updateMethods = () => processLabels.find((x) => x.title === tab);

  useEffect(() => {
    const results = updateMethods();
    setMethodsList(results.labels);
  }, [tab]);
  return (
    <div>
      <Box mt="2.3rem">
        <Box>
          <Tabs
            value={tab}
            aria-label="basic tabs example"
            textColor="white"
            onChange={(e, value) => setTab(value)}
            indicatorColor="primary"
          >
            {processLabels.map((label) => (
              <Tab label={label.title} value={label.title} key={label.title} />
            ))}
          </Tabs>
        </Box>
        <Divider sx={{ bgcolor: 'lineDivider.main' }} />
      </Box>
    </div>
  );
}

export default ListTabs;
