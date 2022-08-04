import React from 'react';
import { Box } from '@mui/material';
import DashboardButton from './DashboardButton';
import ProfileButton from './ProfileButton';

export default function DashboardLogOutButtons() {
  return (
    <div>
      <Box display="flex" alignItems="center" sx={{ ml: 5 }}>
        <DashboardButton />
        <ProfileButton />
      </Box>
    </div>
  );
}
