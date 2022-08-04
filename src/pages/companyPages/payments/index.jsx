// Source: https://stripe.com/docs/payments/accept-a-payment?platform=web&ui=elements&html-or-react=react#use-orders
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Register from '@pages/loginRegistration/Register';
import ProgressBar from './ProgressBar';
import CustomForm from './CustomForm';

export default function Payments() {
  // handle situation where user is upgrading account (i.e. redirects from
  // "Acount" page by clicking the "upgrade" link)
  const params = new URLSearchParams(window.location.search);
  const upgrade = params.get('upgrade');
  console.log(upgrade, '<<<upgrade');

  const initialState = upgrade ? 1 : 0;
  console.log(initialState, '<<< initialState from CheckoutForm');
  const [displayRegisterOrPayment, setDisplayRegisterOrPayment] = useState(initialState);
  const [email, setEmail] = useState('');
  // if (urlParamEmail) {
  //  setEmail(urlParamEmail);
  // }

  return (
    <Box>
      <ProgressBar displayRegisterOrPayment={displayRegisterOrPayment} />
      <Box
        display="flex"
        flexDirection="row"
        marginLeft="auto"
        marginRight="auto"
        justifyContent="center"
        alignItems="center"
      >
        {displayRegisterOrPayment === 0 ? (
          <Register
            setDisplayRegisterOrPayment={setDisplayRegisterOrPayment}
            premiumUserFlow
            updateEmail={setEmail}
          />
        ) : (
          <CustomForm email={email} initialState={initialState} />
        )}
      </Box>
    </Box>
  );
}
