import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Template.module.css';

export default function Template(props) {
  const { title, description, logo, path } = props;
  return (
    <Box bgcolor='white'  >
          <img width='100%' height='100%'  src={logo} alt="usecases" className={styles.CardImage} />
        <Box p={2} >
          <h3 className={styles.useCaseTitle}>{title}</h3>
          <Box>
            <p className={styles.useCaseSubheading}>{description}</p>
          </Box>
          <Box>
              <Link to={path} className={styles.Link}>
                Learn More &#62;
              </Link>
          </Box>
        </Box>
    </Box>
  );
}
