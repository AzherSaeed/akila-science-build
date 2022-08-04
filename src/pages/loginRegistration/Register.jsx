import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, Grid } from '@mui/material';
import { CustomDropdown } from '@components';
import { registerUserAction, LoginDispatchContext } from '@contexts';
import { useNavigate } from 'react-router-dom';
import { jobPositionList as occupationList } from '@pages/companyPages/dropdownText';
import config from '@config';
import TimeZones from './TimeZones';
import UserPool from './UserPool';

export default function Register({ premiumUserFlow, setDisplayRegisterOrPayment, updateEmail }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [givenName, setGivenName] = useState({ Name: 'given_name', Value: '' });
  const [familyName, setFamilyName] = useState({
    Name: 'family_name',
    Value: '',
  });
  const [locale, setLocale] = useState({ Name: 'locale', Value: '' });
  const updateLocale = (value) => {
    setLocale({ Name: 'locale', Value: value });
  };
  const [occupation, setOccupation] = useState({ Name: 'occupation', Value: '' });
  const updateOccupation = (e) => {
    setOccupation({ Name: 'custom:occupation', Value: e });
  };
  // const [emailAlreadyExistsError, setEmailAlreadyExistsError] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const [passwordDoesNotConformToPolicy, setPasswordDoesNotConformToPolicy] = useState(false);
  const [displayError, setDisplayError] = useState('');
  const [attributeList, setAttributeList] = useState([]);
  const [signUpSuccessful, setSignUpSuccessful] = useState(false);
  const dispatch = React.useContext(LoginDispatchContext);

  const moveToVerifyEmail = () => {
    navigate(`/verify-email?email=${email}`);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    UserPool.signUp(email, password, attributeList, null, (err) => {
      if (err) {
        const errMessage = Error(err).message;
        console.log(errMessage, '<<< errMessage');
        errMessage.includes('InvalidPasswordException')
          ? setPasswordDoesNotConformToPolicy(true)
          : setRegistrationError(errMessage);
        // setSignUpSuccessful(false);
        return;
      }
      if (!premiumUserFlow) {
        registerUserAction(dispatch, { givenName, familyName, email, locale, occupation });
        // setSignUpSuccessful(true);
        moveToVerifyEmail();
        // history.push(`/verify-email?email=${email}`);
        // <Redirect push to={`/verify-email?email=${email}`} />;
      }

      if (premiumUserFlow) {
        registerUserAction(dispatch, { givenName, familyName, email, locale, occupation });
        setDisplayRegisterOrPayment('payment');
        updateEmail(email);
      }
    });
  };

  const technicalError = `There was a technical error during the registration process. Please try again later or contact us at ${config.emails.support}`;
  const userError = 'That email already exists. Please use a new email.';

  useEffect(() => {
    registrationError.includes('UnexpectedLambdaException')
      ? setDisplayError(technicalError)
      : setDisplayError(userError);
  }, [registrationError]);

  useEffect(() => {
    console.log('inside signUpSuccessful useEffect');
    // if (signUpSuccessful) {
    //  history.push(`/verify-email?email=${email}`);
    // }
  }, [signUpSuccessful]);

  useEffect(() => {
    const temp = [];
    temp.push(givenName);
    temp.push(familyName);
    temp.push(locale);
    temp.push(occupation);
    setAttributeList(temp);
  }, [givenName, familyName, email, occupation, locale]);

  return (
    <Box>
      <Box component="form" noValidate width="30vw">
        <Box display="flex" justifyContent="space-between">
          <TextField
            margin="normal"
            required
            type="text"
            id="givenName"
            label={givenName.Value === '' ? 'First Name' : ''}
            name="givenName"
            InputLabelProps={{ shrink: false }}
            sx={{
              width: '100%',
              input: {
                color: 'black',
                background: 'white',
              },
            }}
            autoComplete="given-name"
            value={givenName.Value}
            onChange={(e) => setGivenName({ Name: 'given_name', Value: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            id="family-name"
            type="text"
            autoComplete="family-name"
            label={familyName.Value === '' ? 'Last Name' : ''}
            InputLabelProps={{ shrink: false }}
            name="familyName"
            sx={{
              marginLeft: '5px',
              width: '100%',
              input: {
                color: 'black',
                background: 'white',
              },
            }}
            value={familyName.Value}
            onChange={(e) => setFamilyName({ Name: 'family_name', Value: e.target.value })}
          />
        </Box>
        <TimeZones setLocale={updateLocale} />
        <CustomDropdown
          label="How Would You Define Yourself"
          value={occupation.Value}
          items={occupationList}
          onChangeFunc={updateOccupation}
          borderRadius="0px"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label={email === '' ? 'Email' : ''}
          InputLabelProps={{ shrink: false }}
          name="email"
          autoFocus
          sx={{
            input: {
              color: 'black',
              background: 'white',
            },
          }}
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmpassword"
          label={password === '' ? 'Password' : ''}
          InputLabelProps={{ shrink: false }}
          sx={{
            input: {
              color: 'black',
              background: 'white',
            },
          }}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label={confirmPassword === '' ? 'Confirm Password' : ''}
          InputLabelProps={{ shrink: false }}
          sx={{
            input: {
              color: 'black',
              background: 'white',
            },
          }}
          type="password"
          id="registerPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
        />
        <br />
        <Box style={{ color: 'white' }}>
          {password === '' || confirmPassword === ''
            ? ''
            : password === confirmPassword
            ? 'Passwords Match'
            : 'Password do not match'}
          <br />
          <br />
        </Box>
        Passwords must contain: <br />
        <Box display="flex" flexDirection="row" paddingLeft="20px">
          <ul>
            <li>At least 8 characters</li>
            <li>One uppercase letter</li>
            <li>One number</li>
            <li>One special character</li>
          </ul>
        </Box>
        <br />
        <Box
          color="red"
          backgroundColor="#f9dce3"
          borderRadius="10px"
          padding="3%"
          sx={{
            display: registrationError ? '' : 'none',
          }}
        >
          {displayError}
        </Box>
        <Box
          color="red"
          backgroundColor="#f9dce3"
          borderRadius="10px"
          padding="3%"
          sx={{
            display: passwordDoesNotConformToPolicy ? '' : 'none',
          }}
        >
          That password does not conform to the policy!
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e) => onSubmit(e)}
        >
          Register
        </Button>
        <Grid container />
      </Box>
    </Box>
  );
}
