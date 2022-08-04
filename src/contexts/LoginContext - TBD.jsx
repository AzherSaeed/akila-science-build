import React, { createContext, useState, useEffect } from 'react';
import Pool from '@pages/loginRegistration/UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const LoginContext = createContext();

export default function LoginContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const handleLogOut = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
    setIsLoggedIn(false);
  };

  async function getSession() {
    const user = await Pool.getCurrentUser();
    if (user) {
      await user.getSession((err) => {
        if (err) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      });
    }
  }

  const authenticate = async (Username, Password) =>
    new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess ', data);
          setIsLoggedIn(true);
          resolve(data);
        },
        onFailure: (err) => {
          console.error('onFailure: ', err);
          setIsLoggedIn(false);
          setIncorrectPassword(true);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired: ', data);
          resolve(data);
        },
      });
    });

  useEffect(() => {
    getSession();
  }, []);
  console.log(email, '<<< email from Context useEffect');

  return (
    <LoginContext.Provider
      value={{
        authenticate,
        getSession,
        isLoggedIn,
        handleLogOut,
        incorrectPassword,
        email,
        license,
        setEmail,
        givenName,
        familyName,
        setGivenName,
        setFamilyName,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };
