import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import NewProjectCard from './NewProjectCard';
import SortProjects from './SortProjects';

export default function WorkflowHome() {
  const [newProject, setNewProject] = useState(false);
  const updateNewProjectModal = () => {
    setNewProject(!newProject);
  };

  useEffect(() => {}, [newProject]);
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Typography variant="h1">My Home</Typography>
      <SortProjects />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ProjectCard />
          </Grid>
          <Grid item xs={3}>
            <NewProjectCard updateNewProjectModal={updateNewProjectModal} newProject={newProject} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
