import React from 'react';
import { BusinessAnalyst, DataScientist, ItOperations, SoftwareEngineer } from '@solutions';

export default {
  key: 'solutions',
  path: '/solutions',
  children: [
    { key: 'business-analyst', path: 'business-analyst', element: <BusinessAnalyst /> },
    { key: 'software-engineer', path: 'software-engineer', element: <SoftwareEngineer /> },
    {
      key: 'data-scientist',
      path: 'data-scientist',
      element: <DataScientist />,
    },
    {
      key: 'it-operations',
      path: 'it-operations',
      element: <ItOperations />,
    },
  ],
};
