import React, { useReducer, createContext } from 'react';
import { initialState, LoginReducer } from './reducer';

const LoginContext = createContext();
const LoginDispatchContext = createContext();

function LoginContextProvider({ children }) {
  const [user, dispatch] = useReducer(LoginReducer, initialState);

  return (
    <LoginContext.Provider value={user}>
      <LoginDispatchContext.Provider value={dispatch}>{children}</LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export { LoginContextProvider, LoginDispatchContext, LoginContext };
