import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise = loadStripe(
  'pk_test_51Kpd0iJKv6FdgRdllF56aaIl1ebM2ILDgVeeEmhAed8pjmuMb1LREacvja6KaO9fHznDx0jYuYiApInqCMGKYQk8002Zfx92sf'
);

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
  }

  return stripePromise;
};

const item = {
  price: 'price_1KpdHvJKv6FdgRdleI1IpFRI',
  quantity: 1,
};

const checkoutOptions = {
  lineItems: [item],
  mode: 'subscription',
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`,
};

const starterRedirectToCheckout = async () => {
  console.log('redirectToCheckout');

  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout(checkoutOptions);
  console.log('Stripe checkout error', error);

  if (error) setStripeError(error.message);
};

export { starterRedirectToCheckout };
