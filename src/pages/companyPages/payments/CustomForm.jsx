import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import config from '@config';
import Axios from 'axios';
import CheckoutForm from './CheckoutForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.

// Source:https://stripe.com/docs/payments/quickstart
// Source (this guide is better): https://stripe.com/docs/payments/accept-a-payment?platform=web&ui=elements&html-or-react=react
const stripePromise = loadStripe(config.stripe.STRIPE_API_KEY);

export default function CustomForm({ email, initialState }) {
  const params = new URLSearchParams(window.location.search);
  const urlParamEmail = params.get('email');
  const [clientSecret, setClientSecret] = useState('');
  const emailHandler = email ? urlParamEmail : '';

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    (async () => {
      const transactionDetails = { receipt_email: emailHandler };
      const response = await Axios.post(
        config.stripe.AWS_WEBHOOK_GENERATE_SECRET,
        transactionDetails
      );
      setClientSecret(response.data.clientSecret);
    })();
  }, []);

  const appearance = {
    theme: 'night',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm email={emailHandler} initialState={initialState} />
            </Elements>
          )}
        </Box>
      </Box>
    </Box>
  );
}
