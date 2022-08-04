import React from 'react';
import { Box, Typography } from '@mui/material';
import { blueCheckMark, demosImage } from '@assets';
import { BlueButton } from '@components';
import styles from './Demos.module.css';

export default function Demos() {
  const textItem = (text) => (
    <div className={styles.textItem} style={{ display: 'flex', alignItems: 'center' }}>
      <div
        alt="Blue-Check-Mark"
        className={styles.checkMark}
        style={{
          backgroundImage: `url(${blueCheckMark})`,
        }}
      />
      <div className={styles.text}>{text}</div>

    </div>
  );

  const item1 = 'Automate a variety of data prep steps';
  const item2 = 'Build advanced and accurate models in minutes';
  const item3 = 'Evaluate, describe, and interpret your models with ease';
  const item4 = 'Automate deployment, monitoring, and management of your models';
  return (
    <Box maxWidth="1110px" marginTop="20vh" height="100vh" margin="20vh auto 0 auto">
      <div className={styles.container}>
        <div className={styles.Benefits}>
          <Box paddingBottom="44px">
            <Typography maxWidth={522} fontSize={40} fontWeight={600} color=" #E3E3E3" lineHeight="113.69%" >
                Sign up for your personalized demo and see how you can:
            </Typography>
          </Box>
          {textItem(item1)}
          {textItem(item2)}
          {textItem(item3)}
          {textItem(item4)}
        </div>
        <div
          className={styles.demoImgContainer}
          style={{
            background: `url(${demosImage}) no-repeat center center/cover`,
            minHeight: '378px',
            width: '100%',
            maxWidth: '540px',
            borderRadius: '9px',
          }}
        />
      </div>

    </Box>
  );
}
