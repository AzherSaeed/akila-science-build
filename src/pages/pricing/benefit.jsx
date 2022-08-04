import React from 'react';
import { greenCheckMark } from '@assets';
import styles from './benefit.module.css';

export default function Benefit({ text }) {
  return (
    <div className={styles.Benefit}>
      <div
        alt="Green-Check-Mark"
        className={styles.checkMark}
        style={{
          backgroundImage: `url(${greenCheckMark})`,
        }}
      />
      <div className={styles.text}>{text}</div>
      <br />
    </div>
  );
}
