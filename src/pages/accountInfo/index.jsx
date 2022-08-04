import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ProtectedRoute from '@src/ProtectedRoute.jsx';
import AccountHeader from './AccountHeader';
import Profile from './Profile';
import License from './License';

export default function AccountInfo() {
  const [showProfile, setShowProfile] = useState(true);

  const displayProfileOrLicense = () => {
    if (showProfile) {
      return <Profile />;
    }
    return <License />;
  };
  useEffect(() => {}, [showProfile]);

  return (
    <ProtectedRoute>
      <Box marginLeft="15vw">
        <AccountHeader setShowProfile={setShowProfile} showProfile={showProfile} />
        {displayProfileOrLicense()}
      </Box>
    </ProtectedRoute>
  );
}
