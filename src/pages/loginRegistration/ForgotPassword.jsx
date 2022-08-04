import React, { useState, useEffect } from 'react';
import ModalHeader from '@components/Modals/ModalHeader';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Box, Button, Modal, TextField } from '@mui/material';
import { Navigate } from 'react-router-dom';
import Pool from './UserPool';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40vw',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '4px solid #000',
  boxShadow: 24,
  overflow: 'scroll',
  backgroundColor: '#FFF',
  padding: '0 0%',
};

export default function ChangePassword({ open, handleClose }) {
  const [stage, setStage] = useState('request-verification-code'); // submit-password-change request-verification-code
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let userData;
  useEffect(() => {
    userData = {
      Username: email,
      Pool,
    };
  }, [email]);

  const requestNewCode = () => {
    setStage('submit-password-change');
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.forgotPassword({
      onSuccess(data) {
        // successfully initiated reset password request
        setStage('submit-password-change');
      },
      onFailure(err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  };

  const submitPasswordChange = () => {
    if (password !== confirmPassword) {
      alert('Please ensure passwords match');
      return 0;
    }
    userData = {
      Username: email,
      Pool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmPassword(verificationCode, password, {
      onSuccess() {
        <Navigate route="/workflows/home" />;
      },
      onFailure(err) {
        alert('There was an error resetting the password. Please try again.');
      },
    });
  };

  const requestNewCodeButton = () => (
    <Button onClick={requestNewCode}>Request Verification Code</Button>
  );
  const submitPasswordChangeButton = () => (
    <Button onClick={submitPasswordChange}>Submit New Password</Button>
  );

  const buttonHandler = () => {
    if (stage === 'request-verification-code') {
      return requestNewCodeButton();
    }
    if (stage === 'submit-password-change') {
      return submitPasswordChangeButton();
    }
    return '';
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
  const emailField = () => (
    <TextField
      margin="normal"
      fullWidth
      required
      placeholder="Email"
      label="Email"
      InputProps={inputProps}
      InputLabelProps={inputLabelProps}
      sx={sx}
      type="email"
      autoComplete="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
  );

  const passwordFields = () => (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        name="number"
        label={verificationCode === '' ? 'Verification Code' : ''}
        sx={{
          input: {
            color: 'black',
            background: 'white',
          },
        }}
        type="text"
        id="verificationCode"
        onChange={(e) => setVerificationCode(e.target.value)}
        value={verificationCode}
      />
      <TextField
        margin="normal"
        required
        name="new-password"
        placeholder="New Password"
        label="New Password"
        InputProps={inputProps}
        InputLabelProps={inputLabelProps}
        sx={sx}
        type="password"
        fullWidth
        autoComplete="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <TextField
        margin="normal"
        required
        name="confirm-new-password"
        placeholder="Confirm New Password"
        label="Confirm New Password"
        value={confirmPassword}
        InputProps={inputProps}
        InputLabelProps={inputLabelProps}
        sx={sx}
        type="password"
        fullWidth
        autoComplete="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {password === '' || confirmPassword === ''
        ? ''
        : password === confirmPassword
        ? 'Passwords Match'
        : 'Password do not match'}
    </div>
  );

  const fieldsHandler = () => {
    if (stage === 'request-verification-code') {
      return emailField();
    }
    if (stage === 'submit-password-change') {
      return passwordFields();
    }
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
            {fieldsHandler()}
            <br /> <br />
            {buttonHandler()}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
