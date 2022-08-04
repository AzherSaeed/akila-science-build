import React from 'react';
import {
  WorkflowHome,
  DataConnections,
  MyData,
  DataProcessing,
  Visualizations,
  NewDashboard,
  NewChart,
  BuildModel,
  AutoML,
  MachineLearning,
  Scheduler,
} from '@pages/workflows';

export default [
  {
    key: 'workflows-home',
    path: '/workflows/home',
    element: <WorkflowHome />,
  },
  {
    key: 'Data-Connections',
    path: '/workflows/data-connections',
    element: <DataConnections />,
  },
  {
    key: 'My-Data',
    path: '/workflows/my-data',
    element: <MyData />,
  },
  {
    key: 'Data-Processing',
    path: '/workflows/data-processing',
    element: <DataProcessing />,
  },
  {
    key: 'MachineLearning',
    path: '/workflows/machine-learning',
    element: <MachineLearning />,
  },
  {
    key: 'build-model',
    path: '/workflows/machine-learning/build-model',
    element: <BuildModel />,
  },
  {
    key: 'auto-ml',
    path: '/workflows/machine-learning/auto-ml',
    element: <AutoML />,
  },
  {
    key: 'visualizations',
    path: '/workflows/visualizations',
    element: <Visualizations />,
  },
  {
    key: 'new-dashboard',
    path: '/workflows/visualizations/new-dashboard',
    element: <NewDashboard />,
  },
  {
    key: 'new-chart',
    path: '/workflows/visualizations/new-chart',
    element: <NewChart />,
  },
  {
    key: 'Scheduler',
    path: '/workflows/scheduler',
    element: <Scheduler />,
  },
];
