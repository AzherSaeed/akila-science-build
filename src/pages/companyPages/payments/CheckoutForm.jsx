import React, { useEffect, useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Box, Button } from '@mui/material';
import config from '@config';
import styles from './CustomForm.module.css';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

export default function CheckoutForm({ email, initialState }) {
  console.log(initialState, '<<< initialState from CheckoutForm');
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const returnUrlHandler = initialState
    ? `${config.BASE_URL}/account`
    : `${config.BASE_URL}/verify-email?email=${email}`;

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: returnUrlHandler,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      console.log(error, '<< error');
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const temp = async (cognitoUser, attributeList) => {
    console.log('inside temp');
    await cognitoUser.updateAttributes(attributeList, (err, result) => {
      console.log('inside cognitoUser.updateAttributes');
      if (err) {
        JSON.stringify('Error in cognitoUser.updateAttributes: ', err);
        console.log('An error occured inside cognitoUser.updateAttributes', err);
        return;
      }
      console.log(`call result: ${result}`);
    });
  };
  const updateUserAttributes = async () => {
    const poolData = {
      UserPoolId: 'us-east-1_8VuKm3JR9', // Your user pool id here
      ClientId: '7ar3h05f55i4jpm6fvd5d9rnph', // Your client id here
    };
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const userData = {
      Username: 'BrandonGoldney@gmail.com',
      Pool: userPool,
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    const attributeList = [];
    let attribute = {
      Name: 'locale',
      Value: 'joe',
    };
    attribute = new AmazonCognitoIdentity.CognitoUserAttribute(attribute);
    attributeList.push(attribute);
    await temp(cognitoUser, attributeList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ minWidth: '500px' }}>
        <Box marginTop="10vh">
          <PaymentElement id={styles.PaymentElement} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading || !stripe || !elements}
            id="submit"
            sx={{ mt: 3, mb: 2 }}
          >
            <span id="button-text">
              {isLoading ? <div className={styles.spinner} id="spinner" /> : 'Pay now'}
            </span>
          </Button>
          {/* Show any error or success messages */}
          {message && <div id={styles.PaymentMessage}>{message}</div>}
        </Box>
      </form>
      <Button onClick={updateUserAttributes}>Update User</Button>
    </div>
  );
}
