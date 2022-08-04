import React from 'react';
import { greenPlus } from '@assets/index';
import { Card, CardContent, Typography } from '@mui/material';
import NewProject from '@components/Modals/NewProject';

export default function NewProjectCard(props) {
  const { newProject, updateNewProjectModal } = props;
  return (
    <div>
      <Card
        variant="outlined"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'primary.backgroundColor',
        }}
        sx={{
          maxWidth: '15vw',
          maxHeight: '40vh',
          minHeight: '40vh',
        }}
      >
        <CardContent
          style={{ display: 'flex', flexDirection: 'column' }}
          sx={{
            paddingBottom: '10px',
          }}
        >
          <Typography fontSize="2rem" fontWeight="600">
            Create New Project
          </Typography>
        </CardContent>
        <img
          src={greenPlus}
          height="100px"
          alt=""
          onClick={() => {
            updateNewProjectModal();
          }}
        />
        <CardContent>
          <Typography variant="h6" component="p" align="left" />
        </CardContent>
      </Card>
      <NewProject newProject={newProject} updateNewProjectModal={updateNewProjectModal} />
    </div>
  );
}
