// import { Grid, Tab, Tabs, Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';
// import styles from '../Data Processing/home.module.scss';
// import Sidebar from './Sidebar';
//
// export default function SpecificKey() {
//  const [value, setValue] = React.useState(0);
//  const handleChange = (event, newValue) => {
//    setValue(newValue);
//  };
//  return (
//    <Grid container spacing={3} mt={3}>
//      <Grid item lg={3}>
//        <Sidebar />
//      </Grid>
//      <Grid item lg={7}>
//        <Typography mt={2} className={styles['load-head']}>
//          Specify Key Variables
//        </Typography>
//        <Typography mt={2} className={styles['load-head']}>
//          Identify the different types of variable
//        </Typography>
//        <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.28);' }}>
//          <Typography mt={2} className={styles['load-head']}>
//            Create pipeline
//          </Typography>
//          <Tabs value={value} onChange={handleChange}>
//            <Grid container>
//              <Tab className={styles.tab} label="Numeric Variable" />
//              <Tab className={styles.tab} label="Categorical Variable" />
//              <Tab className={styles.tab} label="Target Variable" />
//            </Grid>
//          </Tabs>
//        </Box>
//        ;
//        <Typography mt={2} className={styles['load-head']}>
//          Select the appropriate for each variable type
//        </Typography>
//        <Grid container mt={3} alignItems="center" justifyContent="space-between" spacing={3}>
//          <Grid item xs={12} md={6} lg={5}>
//            <Box
//              sx={{
//                height: '146px',
//                bgcolor: 'rgba(255, 255, 255, 0.13);',
//              }}
//            />
//          </Grid>
//          <Grid
//            item
//            md={2}
//            lg={2}
//            sx={{
//              display: {
//                xs: 'none',
//                lg: 'unset',
//              },
//              fontSize: '9rem',
//            }}
//          >
//            {' '}
//            <Box component="p" sx={{ lineHeight: 0, color: '#FFFFFF' }}>
//              &#8594;
//            </Box>
//            <Box component="p" color="#FFFFFF">
//              &#8592;
//            </Box>
//          </Grid>
//          <Grid xs={12} md={6} lg={5} item>
//            <Box
//              sx={{
//                height: '146px',
//                bgcolor: 'rgba(255, 255, 255, 0.13);',
//              }}
//            />
//          </Grid>
//        </Grid>
//      </Grid>
//    </Grid>
//  );
// }
