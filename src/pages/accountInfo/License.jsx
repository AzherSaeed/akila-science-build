import React, { useContext } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { LoginContext } from '@contexts';

export default function License() {
  const { email, license } = useContext(LoginContext);
  console.log(license, '<<< license from License');

  const link = `/payment?email=${email}&upgrade=True`;
  const upgradeToStarter = () => (
    <div>
      You are currently enrolled in the free license.{' '}
      <Link href={link} fontSize={35} color="#FFF">
        Click here
      </Link>{' '}
      to upgrade
    </div>
  );
  const upgradeToProfessional =
    'You are currently enrolled in the starter license. Please contact us to upgrade.';
  const upgradeToEnterprise =
    'You are currently enrolled in the professional license. Please contact us to upgrade.';
  const licenseIsEnterprise = 'You are enrolled in the enterprise license.';
  let message;
  if (license === '1') {
    message = upgradeToStarter;
  }
  if (license === '2') {
    message = upgradeToProfessional;
  }
  if (license === '3') {
    message = upgradeToEnterprise;
  }
  if (license === '4') {
    message = licenseIsEnterprise;
  }
  if (license === undefined) {
    message = upgradeToStarter();
  }
  return (
    <Box minHeight="90vh">
      <Typography fontSize={35} color="white">
        {message}
      </Typography>
    </Box>
  );
}
