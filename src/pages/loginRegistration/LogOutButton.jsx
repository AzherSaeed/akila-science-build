import React from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '@components/Buttons/LogOutButton';
import Pool from './UserPool';

export default function LogOut() {
  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };
  const history = useHistory();
  const moveToHomePage = () => {
    history.push('/');
  };

  const onClick = () => {
    logout();
    moveToHomePage();
  };
  return (
    <div>
      <LogOutButton onClick={onClick} />
    </div>
  );
}
