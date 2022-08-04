// THIS IS NOT IMPLEMENTED IN THE FRONT END YET.
// THE CORRECT FLOW NEEDS TO BE DETERMINED. FOR EXAMPLE:
// 1) user requests to change email
// 2) the user proves they own the new email
// 3) NOW the new email is reflected in Cognito (Cognito shouldn't update until
// the user proves they own the new email)
// 4) A confirmation is sent to the user's existing email - this step prevents
// fraud (e.g. someone ahcking into the user's account and changing the email)
// 5) Once the user provdes they own both email accounts then the email is
// updated

import React, { useState } from 'react';
import ModalHeader from '@components/Modals/ModalHeader';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import config from '@config';
import { Box, Button, Modal, TextField } from '@mui/material';

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

export default function ChangeEmail({ open, handleClose }) {
  const [stage, setStage] = useState('request-verification-code');
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const onSubmit = () => {
    // set up cognitoUser and userPool
    const attributeList = [];
    let attribute = {
      Name: 'email',
      Value: newEmail,
    };
    attribute = new CognitoUserAttribute(attribute);
    attributeList.push(attribute);

    // verify current user
    const poolData = {
      UserPoolId: config.login.UserPoolId, // Your user pool id here
      ClientId: config.login.ClientId, // Your client id here
    };
    const userPool = new CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser, '<<< cognitoUser');
    cognitoUser.getSession((err, session) => {
      if (err) {
        alert(err.message || JSON.stringify(err), 'inside error 1');
      }
    });

    cognitoUser.updateAttributes(attributeList, (err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err), 'inside error 2');
        return;
      }
      console.log(`call result: ${result}`);
      setStage('submit-verification-code');
    });
  };

  const verifyUpdatedEmail = () => {
    const poolData = {
      UserPoolId: config.login.UserPoolId, // Your user pool id here
      ClientId: config.login.ClientId, // Your client id here
    };
    const userPool = new CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser();
    // verify user
    cognitoUser.getSession((err, session) => {
      if (err) {
        alert(err.message || JSON.stringify(err), 'inside error 1');
      }
    });
    cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
      if (err) {
        console.log(err, '<<<< err');
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log(`call result: ${result}`);
      if (result === 'SUCCESS') {
        moveToWorkflows();
        handleClose();
      }
    });
  };

  const buttonHandler = () => {
    if (stage === 'request-verification-code') {
      return (
        <div>
          <Button type="submit" variant="contained" color="primary" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      );
    }
    if (stage === 'submit-verification-code') {
      return (
        <div>
          <Button type="submit" variant="contained" color="primary" onClick={verifyUpdatedEmail}>
            Submit Verification Code
          </Button>
        </div>
      );
    }
    return -1;
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

  const displayVerificationCodeInput = () => (
    <div style={{ display: stage === 'submit-verification-code' ? '' : 'none' }}>
      <TextField
        margin="normal"
        fullWidth
        required
        placeholder="Verification Code"
        label="Verification Code"
        value={verificationCode}
        InputProps={inputProps}
        InputLabelProps={inputLabelProps}
        sx={sx}
        type="text"
        onChange={(e) => setVerificationCode(e.target.value)}
      />
    </div>
  );

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display="flex" flexDirection="column">
          <ModalHeader title="Change Email" />
          <Box padding="0% 5%">
            <br />
            <Box display={stage === 'request-verification-code' ? '' : 'none'}>
              <TextField
                margin="normal"
                fullWidth
                required
                placeholder="Old Email"
                label="Old Email"
                value={oldEmail}
                InputProps={inputProps}
                InputLabelProps={inputLabelProps}
                sx={sx}
                type="email"
                autoComplete="email"
                onChange={(e) => setOldEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                required
                placeholder="New Email"
                label="New Email"
                value={newEmail}
                InputProps={inputProps}
                InputLabelProps={inputLabelProps}
                sx={sx}
                type="email"
                autoComplete="email"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Box>
            {displayVerificationCodeInput()}
            <br /> <br />
            {buttonHandler()}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
