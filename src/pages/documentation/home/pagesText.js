import { connections, database, circle, eye, brain, calendar } from '@assets/index';

export default [
  {
    text: 'Data Connections',
    id: 'data-connections',
    description: 'Easily connect to data sources.',
    image: connections,
    dashboardLink: '/workflows/data-connections',
    documentationLink: '/documentation/data-connections',
  },
  {
    text: 'Data Processing',
    id: 'data-processing',
    description: 'A user friendly way to process, clean, and merge data.',
    image: circle,
    dashboardLink: '/workflows/data-processing',
    documentationLink: '/documentation/data-processing',
  },
  {
    text: 'Machine Learning',
    id: 'machine-learning',
    description: 'Easily build models with no experience necessary.',
    image: brain,
    dashboardLink: '/workflows/machine-learning',
    documentationLink: '/documentation/machine-learning',
  },
  {
    text: 'My Data',
    id: 'my-data',
    description: 'Browse files and data sources',
    image: database,
    dashboardLink: '/workflows/my-data',
    documentationLink: '/documentation/my-data',
  },
  {
    text: 'Scheduler',
    id: 'scheduler',
    description: 'Set up recurring jobs.',
    image: calendar,
    dashboardLink: '/workflows/scheduler',
    documentationLink: '/documentation/scheduler',
  },
  {
    text: 'Visualizations',
    id: 'visualizations',
    description: 'Build charts and dashboards with ease',
    image: eye,
    dashboardLink: '/workflows/visualizations',
    documentationLink: '/documentation/visualizations',
  },
];
