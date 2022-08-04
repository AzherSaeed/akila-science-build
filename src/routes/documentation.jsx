import React from 'react';
import {
  Home,
  DataProcessing,
  MachineLearning,
  DataConnections,
  MyData,
  Scheduler,
  Visualizations,
} from '@pages/documentation';
import FunctionTemplate from '@pages/documentation/FunctionTemplate';

export default [
  {
    key: 'documentation',
    path: '/documentation',
    element: <Home />,
  },
  {
    key: 'data-processing',
    path: '/documentation/data-processing',
    element: <DataProcessing />,
  },
  {
    key: 'machine-learning',
    path: '/documentation/machine-learning',
    element: <MachineLearning />,
  },
  {
    key: 'data-connections',
    path: '/documentation/data-connections',
    element: <DataConnections />,
  },
  {
    key: 'my-data',
    path: '/documentation/my-data',
    element: <MyData />,
  },
  {
    key: 'scheduler',
    path: '/documentation/scheduler',
    element: <Scheduler />,
  },
  {
    key: 'visualizations',
    path: '/documentation/visualizations',
    element: <Visualizations />,
  },
  {
    key: 'documentation/data-processing',
    path: '/documentation/data-processing/:id',
    element: <FunctionTemplate />,
  },
  {
    key: 'documentation/machine-learning',
    path: '/documentation/machine-learning/:id',
    element: <FunctionTemplate />,
  },
];
