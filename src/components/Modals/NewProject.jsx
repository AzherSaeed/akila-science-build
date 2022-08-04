import React from 'react';
import { Box, Button, Modal } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ModalHeader from './ModalHeader';
import ModalTextField from './ModalTextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  height: '65vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  backgroundColor: '#FFF',
  margin: 0,
  padding: 0,
};

export default function NewProject(props) {
  const { newProject, updateNewProjectModal } = props;
  const theme = useTheme();
  return (
    <Modal
      open={newProject}
      onClose={updateNewProjectModal}
      aria-labelledby="Create New Project"
      sx={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box sx={style}>
        <ModalHeader title="Create New Project" />
        <br />
        <form style={{ height: '50vh', marginLeft: '10vw', alignText: 'center' }}>
          <ModalTextField width="20vw" fontSize="15" label="Project Name" />
          <ModalTextField width="20vw" fontSize="15" label="Project Description" rows="3" />
          <br />
          <Button variant="contained" color="primary">
            Create
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
