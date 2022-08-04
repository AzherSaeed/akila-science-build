import React from 'react';
import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import { connections, database, circle, eye, brain, calendar } from '@assets/index';
import { useNavigate } from 'react-router-dom';

export default function Documentation() {
  const pages = [
    'Data Processing',
    'Machine Learning',
    'Visualizations',
    'Scheduler',
    'Data Connections',
    'My Data',
  ];
  const icons = [
    {
      text: 'Data Connections',
      description: 'Easily connect to data sources.',
      image: connections,
      dashboardLink: '/workflows/data-connections',
      documentationLink: '/documentation/data-connections',
    },
    {
      text: 'My Data',
      description: 'Browse files and data sources',
      image: database,
      dashboardLink: '/workflows/my-data',
      documentationLink: '/documentation/my-data',
    },
    {
      text: 'Data Processing',
      description: 'A user friendly way to process, clean, and merge data.',
      image: circle,
      dashboardLink: '/workflows/data-processing',
      documentationLink: '/documentation/data-processing',
    },
    {
      text: 'Visualizations',
      description: 'Build charts and dashboards with ease',
      image: eye,
      dashboardLink: '/workflows/visualizations',
      documentationLink: '/documentation/visualizations',
    },
    {
      text: 'Machine Learning',
      description: 'Easily build models with no experience necessary.',
      image: brain,
      dashboardLink: '/workflows/machine-learning',
      documentationLink: '/documentation/machine-learning',
    },
    {
      text: 'Scheduler',
      description: 'Set up recurring jobs.',
      image: calendar,
      dashboardLink: '/workflows/scheduler',
      documentationLink: '/documentation/scheduler',
    },
  ];

  const navigate = useNavigate();
  const moveToDocumentationPage = (path) => {
    navigate(path);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Box
            sx={{
              margin: '0 15vw',
              textAlign: 'center',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontSize: '1.75rem',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        {icons.map((icon, index) => {
          const color = index % 2 !== 0 ? 'background.paper' : 'lightGrey';
          return (
            <div style={{ cursor: 'pointer' }}>
              <Box
                display="flex"
                height="30vh"
                width="70vw"
                onClick={() => {
                  moveToDocumentationPage(icon.documentationLink);
                }}
              >
                <Box p={1} flexGrow={2} bgcolor={color} width="50vw">
                  <Typography fontWeight="600" fontSize="2rem">
                    {icon.text}
                  </Typography>{' '}
                  <br /> <br />
                  {icon.description}
                </Box>

                <Box
                  p={1}
                  flexGrow={2}
                  bgcolor={color}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <img src={icon.image} height="90px" alt="" />
                </Box>
              </Box>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
