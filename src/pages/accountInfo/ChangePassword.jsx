import React, { useState } from 'react';
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import ModalHeader from '@components/Modals/ModalHeader';
import Pool from '@pages/loginRegistration/UserPool';
import { Box, Button, Modal, TextField } from '@mui/material';
import config from '@config';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  height: '70vh',
  bgcolor: 'background.paper',
  border: '4px solid #000',
  boxShadow: 24,
  overflow: 'scroll',
  backgroundColor: '#FFF',
  padding: '0 0%',
};

export default function ChangePassword({ open, handleClose, setPasswordChangedSuccessfully }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassowrd, setConfirmPassword] = useState('');

  const updatePassword = async () => {
    const poolData = {
      UserPoolId: config.login.UserPoolId, // Your user pool id here
      ClientId: config.login.ClientId, // Your client id here
    };
    // console.log(poolData, '<<< poolData');
    const userPool = new CognitoUserPool(poolData);
    // console.log(userPool, '<<< userPool');
    const cognitoUser = userPool.getCurrentUser();
    // console.log(cognitoUser, '<<< cognitoUser');

    const user = new CognitoUser({
      Username: cognitoUser.username,
      Pool,
    });

    user.getSession((err, session) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
      }
    });

    user.changePassword(oldPassword, newPassword, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      setPasswordChangedSuccessfully(true);
      handleClose();
    });
  };

  const inputProps = {
    classes: {
      root: {
        borderColor: 'green',
        borderRadius: 50,
      },
    },
  };
  const inputLabelProps = {
    shrink: true,
    style: {
      color: 'black',
    },
  };
  const sx = {
    input: {
      color: 'black',
      background: 'white',
      borderRadius: '10px',
    },
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display="flex" flexDirection="column">
          <ModalHeader title="Change Password" />
          <Box padding="0% 5%">
            <br />
            <TextField
              margin="normal"
              fullWidth
              required
              placeholder="Old Password"
              label="Old Password"
              value={oldPassword}
              InputProps={inputProps}
              InputLabelProps={inputLabelProps}
              sx={sx}
              type="password"
              autoComplete="password"
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              name="new-password"
              value={newPassword}
              placeholder="New Password"
              label="New Password"
              InputProps={inputProps}
              InputLabelProps={inputLabelProps}
              sx={sx}
              type="password"
              fullWidth
              autoComplete="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              name="confirm-new-password"
              placeholder="Confirm New Password"
              label="Confirm New Password"
              value={confirmNewPassowrd}
              InputProps={inputProps}
              InputLabelProps={inputLabelProps}
              sx={sx}
              type="password"
              fullWidth
              autoComplete="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br /> <br />
            <Button type="submit" variant="contained" color="primary" onClick={updatePassword}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
