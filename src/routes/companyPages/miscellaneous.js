import React from 'react';
import HomePage from '@pages/homePage';
import {
  AboutUsPage,
  Demos,
  MissingPage,
  Pricing,
  PrivacyPolicy,
  TermsAndConditions,
  ContactUs,
  VerifyEmail,
  Payments,
} from '@pages/companyPages/index';
import LoginRegistration from '@pages/loginRegistration';

export default [
  {
    key: 'login',
    path: '/login',
    element: <LoginRegistration />,
  },
  {
    key: 'home',
    path: '/',
    element: <HomePage />,
  },
  {
    key: 'about-us',
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    key: 'contact-us',
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    key: 'privacy-policy',
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    key: 'pricing',
    path: '/pricing',
    element: <Pricing />,
  },
  {
    key: 'terms-and-conditions',
    path: '/terms-and-conditions',
    element: <TermsAndConditions />,
  },
  {
    key: 'demos',
    path: '/demos',
    element: <Demos />,
  },
  {
    key: 'payments',
    path: '/payment',
    element: <Payments />,
  },
  {
    key: 'verify-email',
    path: '/verify-email',
    element: <VerifyEmail />,
  },
  {
    key: 'missing-page',
    path: '*',
    element: <MissingPage />,
  },
];
