import React, { useEffect } from 'react';
import { Box, Modal } from '@mui/material';
import ReportBug from './ReportBug';
import RequestFeature from './RequestFeature';
import NewProject from './NewProject';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  backgroundColor: '#FFF',
  margin: 0,
  marginTop: '10vh',
  padding: 0,
};

export default function WorkflowsModals(props) {
  const {
    featureModalOpen,
    bugModalOpen,
    newProject,
    updateReportBugModal,
    updateRequestFeatureModal,
    updateNewProjectModal,
  } = props;
  useEffect(() => {}, [newProject]);
  return (
    <div>
      <Modal
        open={bugModalOpen}
        onClose={updateReportBugModal}
        aria-labelledby="Report a Bug"
        sx={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box sx={style}>
          <ReportBug />
        </Box>
      </Modal>
      <Modal
        open={featureModalOpen}
        onClose={updateRequestFeatureModal}
        aria-labelledby="Request New Feature"
        sx={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box sx={style}>
          <RequestFeature />
        </Box>
      </Modal>
      <Modal
        open={newProject}
        onClose={updateNewProjectModal}
        aria-labelledby="Create New Project"
        sx={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '100vw',
          width: '100vw',
        }}
      >
        <Box sx={style}>
          <NewProject />
        </Box>
      </Modal>
    </div>
  );
}
