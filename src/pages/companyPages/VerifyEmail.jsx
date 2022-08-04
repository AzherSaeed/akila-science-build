import React, { useEffect, useState, useContext } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Box } from '@mui/material';
import Pool from '@pages/loginRegistration/UserPool';
import { LoginDispatchContext } from '@contexts';
import { useNavigate } from 'react-router-dom';
import styles from './VerifyEmail.module.css';

export default function VerifyEmail() {
  let { email } = useContext(LoginDispatchContext);
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');
  const [digit5, setDigit5] = useState('');
  const [digit6, setDigit6] = useState('');
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [userData, setUserData] = useState({});
  const [displayConfirmationMessage, setDisplayConfirmationMessage] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const emailParam = params.get('email');
  if (!email) {
    email = emailParam;
  }
  const userIsConfirmed = params.get('userIsConfirmed');
  if (userIsConfirmed === 'false') {
    const displayUserIsNotConfirmedMessage = true;
  }
  const navigate = useNavigate();

  const moveToWorkflows = () => {
    navigate('/workflows/home');
  };

  useEffect(() => {
    setUserData({ Username: email, Pool });
    if (code) {
      setDigit1(code[0]);
      setDigit2(code[1]);
      setDigit3(code[2]);
      setDigit4(code[3]);
      setDigit5(code[4]);
      setDigit6(code[5]);
      setConfirmationCode(code);
    }
  }, []);

  const requestNewCode = (e) => {
    e.preventDefault();
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.resendConfirmationCode((err, result) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      setDisplayConfirmationMessage(true);
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        console.log(err, '<<<< err');
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log(`call result: ${result}`);
      if (result === 'SUCCESS') {
        console.log('SUCCESS');
        setSuccessfulRegistration(true);
      }
    });
  };

  useEffect(() => {
    setConfirmationCode(digit1 + digit2 + digit3 + digit4 + digit5 + digit6);
  }, [digit1, digit2, digit3, digit4, digit5, digit6]);

  useEffect(() => {
    successfulRegistration ? moveToWorkflows() : '';
  }, [successfulRegistration]);

  const inputElement = (digit, setDigit) => (
    <input
      type="text"
      pattern="\d*"
      maxLength="1"
      value={digit}
      onChange={(e) => setDigit(e.target.value)}
      style={{
        width: '80px',
        height: '100px',
        fontSize: '40px',
        margin: '0 2px',
        textAlign: 'center',
      }}
    />
  );

  return (
    <Box color="white" minHeight="50vh" marginTop="25vh">
      <Box
        color="red"
        backgroundColor="#f9dce3"
        borderRadius="10px"
        padding="1%"
        maxWidth="25vw"
        margin="auto"
        textAlign="center"
        marginBottom="3%"
        display={userIsConfirmed ? '' : 'none'}
      >
        Your email is not confirmed. After entering your confirmation code you will need to login
        again.
      </Box>
      <Box textAlign="center">
        <h3>Please enter the verification code you received via email. </h3>
        <br />
      </Box>
      <Box display="flex" justifyContent="center">
        <Box display="flex" flexDirection="column">
          <Box>
            {inputElement(digit1, setDigit1)} {inputElement(digit2, setDigit2)}{' '}
            {inputElement(digit3, setDigit3)} {inputElement(digit4, setDigit4)}{' '}
            {inputElement(digit5, setDigit5)} {inputElement(digit6, setDigit6)}{' '}
          </Box>
          <br />
          <button id={styles.button} onClick={(e) => onSubmit(e)} type="button">
            Submit
          </button>
          <br />
          <p>
            Request a new code{' '}
            <span
              style={{
                color: '#009EE1',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
              onClick={(e) => requestNewCode(e)}
            >
              here
            </span>
          </p>
          {displayConfirmationMessage ? 'Please check your inbox.' : ''}
        </Box>
      </Box>
    </Box>
  );
}
