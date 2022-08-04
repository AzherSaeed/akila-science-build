import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '@contexts';

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate('/login');
  }

  return children;
}
