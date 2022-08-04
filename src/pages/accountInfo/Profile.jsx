import React, { useState } from 'react';
import { CustomTextField } from '@components';
import Pool from '@pages/loginRegistration/UserPool';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { LoginContext } from '@contexts';
import { Button, Grid, Box } from '@mui/material';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';

export default function Profile() {
  const { givenName, familyName, email, locale, occupation } = React.useContext(LoginContext);
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const handleCloseResetPassword = () => setOpenResetPassword(false);
  const [openChangeEmail, setChangeEmail] = useState(false);
  const handleCloseEmail = () => setChangeEmail(false);
  const [passwordChangedSuccessfully, setPasswordChangedSuccessfully] = useState(false);

  const userData = { Username: email, Pool };
  const cognitoUser = new CognitoUser(userData);

  return (
    <div>
      <br />
      <br />
      <Grid container spacing={2} maxWidth="50vw">
        <Grid item xs={12} md={5}>
          <CustomTextField name="First Name" label={givenName} type="text" />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextField name="Last Name" label={familyName} type="text" />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomTextField name="Email" label={email} type="email" />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomTextField name="Time Zone" label={locale} type="text" />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextField name="Position" label={occupation} type="text" />
        </Grid>
      </Grid>
      <ChangePassword
        open={openResetPassword}
        handleClose={handleCloseResetPassword}
        cognitoUser={cognitoUser}
        setPasswordChangedSuccessfully={setPasswordChangedSuccessfully}
      />
      <ChangeEmail open={openChangeEmail} handleClose={handleCloseEmail} />
      <Box display="flex">
        <Button
          onClick={() => {
            setOpenResetPassword(true);
          }}
        >
          Change Password
        </Button>
      </Box>
      <br /> <br />
      <br />
      <div
        style={{
          backgroundColor: '#dff0d6',
          color: '#3d7734',
          display: passwordChangedSuccessfully === true ? 'flex' : 'none',
          maxWidth: '40vw',
          minHeight: '20vh',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
        }}
      >
        Password successfully changed
      </div>
    </div>
  );
}
