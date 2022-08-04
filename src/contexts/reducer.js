import React, { useState, useReducer } from 'react';

const initialState = {
  user: '',
  token: '',
  errorMessage: null,
  email: '',
  tier: '',
};

/* eslint-disable-next-line no-shadow */
const LoginReducer = (initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        givenName: action.payload.given_name,
        familyName: action.payload.family_name,
        email: action.payload.email,
        locale: action.payload.locale,
        occupation: action.payload.occupation,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        givenName: '',
        familyName: '',
        email: '',
        isLoggedIn: false,
      };
    case 'FORGOT_PASSWORD':
      return {
        givenName: action.payload.givenName.Value,
        familyName: action.payload.familyName.Value,
        email: action.payload.email,
        locale: action.payload.locale,
        isLoggedIn: true,
      };
    case 'REGISTER':
      return {
        givenName: action.payload.givenName.Value,
        familyName: action.payload.familyName.Value,
        email: action.payload.email,
        locale: action.payload.locale.Value,
        occupation: action.payload.occupation.Value,
        isLoggedIn: true,
      };
    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, LoginReducer };
