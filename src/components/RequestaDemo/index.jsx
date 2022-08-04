import React from 'react';
import { RequestDemoLogo } from '@assets';
import { useNavigate } from 'react-router-dom';

import styles from './RequestADemo.module.css';

export default function RequestADemo() {
  const navigate = useNavigate();
  const moveToDemos = () => {
    navigate('/demos');
  };
  const moveToPricing = () => {
    navigate('/pricing');
  };

  return (
    <div className={styles.requestDemoContainer} >
           <div className={styles.logosection} >
               <img src={RequestDemoLogo} alt='RequestDemoLogo'/>
           </div>
           <h1>Getting Started with Akila Analytics</h1>

           <div className={styles.requestDemoButtons} >
               <button className={styles.firstButton} type="button" onClick={moveToDemos}>
                   Request a Demo
               </button>{' '}
               <button className={styles.secondButton} type="button" onClick={moveToPricing}>
                   Register
               </button>
           </div>
    </div>
  );
}
