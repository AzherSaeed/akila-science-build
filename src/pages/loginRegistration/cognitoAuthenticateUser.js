import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from './UserPool';

/* eslint-disable no-new */
export default function authenticateUser(Username, Password) {
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
      },
      onFailure: (err) => {
        reject(err);
      },
      newPasswordRequired: (data) => {
        resolve(data);
      },
    });
  });
}
