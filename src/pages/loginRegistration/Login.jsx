import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, FormControlLabel, Checkbox, Grid } from '@mui/material';
import { LoginDispatchContext, loginAction } from '@contexts';
import { useNavigate } from 'react-router-dom';
import IncorrectPasswordMessage from './IncorrectPasswordMessage';
import ForgotPassword from './ForgotPassword';

export default function Login() {
  const navigate = useNavigate();
  const moveToHomePage = () => {
    navigate('/workflows/home');
  };
  const [emailForm, setEmailForm] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState('');
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const [userIsNotConfirmed, setUserIsNotConfirmed] = useState(false);
  const handleCloseResetPassword = () => {
    setOpenResetPassword(false);
  };

  const dispatch = React.useContext(LoginDispatchContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    await loginAction(emailForm, password, dispatch, moveToHomePage, setLoginFailed);
  };

  useEffect(() => {
    if (loginFailed) {
      loginFailed.message.includes('UserNotConfirmedException')
        ? history.push(`/verify-email?email=${emailForm}&userIsConfirmed=false`)
        : '';
    }
  }, [loginFailed]);

  // useEffect(() => {
  //  setUserIsNotConfirmed(true)
  //    })

  return (
    <Box>
      <Box width="30vw" display="flex" flexDirection="column">
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            type="email"
            autoComplete="email"
            label={emailForm === '' ? 'Email' : ''}
            InputLabelProps={{ shrink: false }}
            sx={{
              input: {
                color: 'black',
                background: 'white',
              },
            }}
            onChange={(e) => setEmailForm(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={password === '' ? 'Password' : ''}
            InputLabelProps={{ shrink: false }}
            sx={{
              input: {
                color: 'black',
                background: 'white',
              },
            }}
            type="password"
            id="loginPassword"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'green',
                  },
                }}
              />
            }
            label="Remember me"
            sx={{ color: 'white' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, display: userIsNotConfirmed ? 'none' : '' }}
            onClick={(e) => onSubmit(e)}
          >
            Log In
          </Button>

          <Grid container>
            <Grid item xs>
              <Button
                onClick={() => {
                  setOpenResetPassword(true);
                }}
              >
                Forgot password?
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <br />
      <ForgotPassword open={openResetPassword} handleClose={handleCloseResetPassword} />
      <IncorrectPasswordMessage loginFailed={loginFailed} userIsNotConfirmed={userIsNotConfirmed} />
    </Box>
  );
}
