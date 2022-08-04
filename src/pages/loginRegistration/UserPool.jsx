import { CognitoUserPool } from 'amazon-cognito-identity-js';
import config from '@config';

export default new CognitoUserPool(config.login);
