import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Template.module.css';

export default function Template(props) {
  const { image, title, description, path } = props;
  return (

      <Box sx={{backgroundColor : 'white' , height : '100%' , borderRadius : '5px'}} >
        <Box height={231}>
          <img height='100%' style={{objectFit : 'cover'}} src={image} alt="usecases" className={styles.CardImage} />
        </Box>
        <Box pb="1vh" className={styles.useCaseTextContainer}>

          <Typography fontSize={18} color='#3C3C3C' fontWeight={500} fontFamily='Raleway' lineHeight='127.70%' my={2} >{title}</Typography>
          <Box mt="1vh">
            <p className={styles.useCaseSubheading}>{description}</p>
          </Box>
          <Box mt="1vh">
            <Link to={path} className={styles.useCaseLinkText}>
              Learn More &#62;
            </Link>
            <br />
            <br />
          </Box>
        </Box>
      </Box>

  );
}
