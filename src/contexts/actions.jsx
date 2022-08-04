import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Pool from '@pages/loginRegistration/UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

// const history = useHistory();
// const moveToHomePage = () => {
//  history.push('/workflows/home');
// };

/* eslint-disable no-new */
const loginAction = (Username, Password, dispatch, nextPage, setErrorStatus) => {
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
        resolve(data);
        /* eslint-disable-next-line camelcase */
        const { given_name, family_name, email, locale } = data.idToken.payload;
        const occupation = data.idToken.payload['custom:occupation'];
        const license = data.idToken.payload['custom:license'];
        dispatch({
          type: 'LOGIN',
          payload: { given_name, family_name, email, locale, occupation, license },
        });
        nextPage();
      },
      onFailure: (err) => {
        setErrorStatus({ status: true, message: Error(err).message });
        reject(err);
      },
      newPasswordRequired: (data) => {
        resolve(data);
      },
    });
  });
};

const forgotPasswordAction = (Username, Password, dispatch) => {
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
      /* eslint-disable-next-line camelcase */
      const { given_name, family_name, email } = data.idToken.payload;
      dispatch({ type: 'FORGOT_PASSWORD', payload: { given_name, family_name, email } });
      // resolve(data);
    },
    onFailure: (err) => {
      console.error('onFailure: ', err);
      // reject(err);
    },
    newPasswordRequired: (data) => {
      console.log('newPasswordRequired: ', data);
      // resolve(data);
    },
  });
};

const registerUserAction = (dispatch, payload) => {
  console.log(payload, '<<< payload');
  dispatch({ type: 'REGISTER', payload });
  // const { email } = payload;
  // return <Redirect push to={`/verify-email?email=${email}`} />;
};

const logoutAction = (dispatch) => {
  const user = Pool.getCurrentUser();
  if (user) {
    user.signOut();
    dispatch({ type: 'LOGOUT' });
  }
};

export { loginAction, logoutAction, registerUserAction };
