import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NewWorkflowCard({ path, title, image, bottomText }) {
  return (
    <div>
      <Card
        variant="outlined"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'primary.backgroundColor',
        }}
        sx={{
          maxWidth: '15vw',
          maxHeight: '40vh',
          minHeight: '40vh',
        }}
      >
        <CardContent
          style={{ display: 'flex', flexDirection: 'column' }}
          sx={{
            paddingBottom: '10px',
          }}
        >
          <Typography fontSize="2rem" fontWeight="600">
            {title}
          </Typography>
        </CardContent>
        <Link to={path}>
          <img
            src={image}
            height="100px"
            alt=""
            style={{
              cursor: 'pointer',
            }}
          />
        </Link>
        <CardContent>
          <Typography variant="h6" component="p" align="left">
            {bottomText}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
