import React, { useState, useEffect } from 'react';
import WorkflowsModals from '@components/Modals/WorkflowsModals';
import { Link } from 'react-router-dom';
import { logo } from '@assets';
import { AppBar, Typography, Box } from '@mui/material';
import ProfileButton from '@components/Buttons/ProfileButton';
import DashboardButton from '@components/Buttons/DashboardButton';

export default function DashboardNavbar() {
  const [featureModalOpen, setFeatureModelOpen] = useState(false);
  const [bugModalOpen, setBugModelOpen] = useState(false);
  const [newProject, setNewProject] = useState(false);
  const updateReportBugModal = () => {
    setBugModelOpen(!bugModalOpen);
  };
  const updateRequestFeatureModal = () => {
    setFeatureModelOpen(!featureModalOpen);
  };
  const updateNewProjectModal = () => {
    setNewProject(!newProject);
  };

  useEffect(() => {}, [featureModalOpen, bugModalOpen, newProject]);

  return (
    <Box>
      <AppBar
        position="fixed"
        color="backgroundColor"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: 'fixed',
          backgroundColor: '#04033b',
          paddingTop: '3vh',
          height: '15vh',
        }}
      >
        <Box
          position="fixed"
          mb="0.7rem"
          display="flex"
          alignItems="center"
          className="logo"
          sx={{ marginLeft: '15vw', position: 'fixed' }} // marginLeft: 15vw ensures Akila Analytics is to the right of the left hand Toolbar/Drawer
        >
          <Link to="/">
            <img src={logo} alt="data-science-logo" />
          </Link>
          <p className="nav-heading">Akila Analytics</p>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginLeft: 'auto',
            justifyContent: 'flex-end',
          }}
        >
          <Box marginRight="3vw">
            <DashboardButton />
          </Box>
          <Box marginRight="3vw" flexGrow={1} display="flex">
            <Typography variant="h6" color="white">
              Welcome, Brandon
            </Typography>
            <ProfileButton
              featureModalOpen={featureModalOpen}
              bugModalOpen={bugModalOpen}
              updateReportBugModal={updateReportBugModal}
              updateRequestFeatureModal={updateRequestFeatureModal}
            />
          </Box>
        </Box>
        <WorkflowsModals
          featureModalOpen={featureModalOpen}
          bugModalOpen={bugModalOpen}
          newProject={newProject}
          updateReportBugModal={updateReportBugModal}
          updateRequestFeatureModal={updateRequestFeatureModal}
          updateNewProjectModal={updateNewProjectModal}
        />
      </AppBar>
    </Box>
  );
}
