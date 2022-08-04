import React, { useContext } from 'react';
import LogInButton from '@components/Buttons/LogInButton';
import DashboardLogOutButtons from '@components/Buttons/DashboardLogOutButtons';
import { LoginContext } from '@contexts';

export default function LogInLogOutButtons() {
  const { isLoggedIn } = useContext(LoginContext);
  return <div>{isLoggedIn ? <DashboardLogOutButtons /> : <LogInButton />}</div>;
}
