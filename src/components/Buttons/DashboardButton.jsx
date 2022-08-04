import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardButton() {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate('/workflows/home');
  };
  return (
    <button onClick={() => moveToHome()} variant="contained" className="btn-blue" type="button">
      Dashboard
    </button>
  );
}
