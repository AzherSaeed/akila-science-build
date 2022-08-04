import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pagesText from './pagesText';

export default function DisplayPages() {
  const navigate = useNavigate();
  return (
    <Container>
      {pagesText.map((page) => (
        <div style={{ cursor: 'pointer' }} key={page.documentationLink}>
          <Box
            display="flex"
            flexDirection={{xs: "column", md: "row"}}
            alignItems='center'
            justifyContent={{xs : 'center' , md : 'unset'}}
            height={{xs : 390 , md : 0}}
            textAlign={{xs : 'center' , md : 'unset'}}
            paddingY={{xs : 20}}
            onClick={() => {
              navigate(page.documentationLink);
            }}
            color="white"
            sx={{
              borderBottom: 1,
              borderColor: 'rgba(255, 255, 255, 0.42)',
            }}
          >
            <Box  flexGrow={2}>
              <Typography marginY={{xs : 1 , md : 'unset'}} fontWeight="600" fontSize={32} lineHeight='113.69%'  fontFamily='Raleway' >
                {page.text}
              </Typography>
              <Typography marginY={{xs : 1 , md : 'unset'}} fontSize={20}  fontWeight={500} fontFamily='Raleway'  >
                {page.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height : '152px',
                width : '259px',
                padding : '90px',
                borderRadius : '7px',
                backgroundImage : 'linear-gradient(180deg, rgba(247, 231, 178, 0.17) 0%, rgba(19, 19, 58, 0) 100%)',

              }}
            >
              <img  src={page.image} alt="image" id={page.id} />
            </Box>
          </Box>
        </div>
      ))}
    </Container>
  );
}
