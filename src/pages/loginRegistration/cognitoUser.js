import Pool from '@pages/loginRegistration/UserPool';
import { CognitoUser } from 'amazon-cognito-identity-js';

export default function createCognitoUser(Username) {
  const userData = {
    Username,
    Pool,
  };
  return new CognitoUser(userData);
}
