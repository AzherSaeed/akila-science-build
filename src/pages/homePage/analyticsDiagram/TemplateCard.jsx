import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridItem: {
    background: 'linear-gradient(180deg, rgba(247, 231, 178, 0.17) 0%, rgba(19, 19, 58, 0) 100%)',
    width: '100%',
    minHeight: '189px',
    margin: '0 auto',
    borderRadius: 7,
    textAlign: 'center',
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: ' #030239',
      zIndex: -1,
      borderRadius: '7px',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '-3px',
      right: '-3px',
      bottom: '-3px',
      left: '-3px',
      background: 'linear-gradient(180deg, rgba(49, 52, 219, 1) 0%, rgba(49, 52, 219, 0.06) 100%)',
      zIndex: -2,
      borderRadius: '7px',
    },
  },
});

function AnalyticsGridItem({ icon, text, arrow }) {
  const style = useStyles();
  return (
    <Grid p={0} item xs={12} md={3}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: 'center',
        }}
      >
        <Box
          sx={{ padding: '15px 30px' }}
          className={style.gridItem}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <img src={icon} alt="" />
          </Box>
          <Typography variant="analyticsGridItem">{text}</Typography>
        </Box>
        <Box
          sx={{
            width: '37px',
            color: '#FFFFFF',
            marginLeft: {
              xs: '0px',
              md: '10px',
            },
            marginTop: {
              xs: '20px',
              md: '0px',
            },
            transform: {
              xs: 'rotate(90deg)',
              sm: 'rotate(0deg)',
            },
          }}
        >
          <img src={`${arrow || ''}`} alt="" />
        </Box>
      </Box>
    </Grid>
  );
}

export default AnalyticsGridItem;
