import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, styled, Typography} from "@mui/material";



export  const BlueButtonContainer = styled(Button)(() => ({
  backgroundImage: 'linear-gradient(90.99deg, #3134DB 0.83%, #009EE1 99.4%)',
  borderRadius : '24px',
  padding : '16px 35px',
  color : '#FFFFFF',
  width : 'max-content'

}))

export default function BlueButton({ onClick, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);

      onClick();
    }
  };

  return (
    <BlueButtonContainer className="btn-blue" type="button" onClick={handleClick}>
      <Typography fontSize={16} fontWeight={400} fontFamily='Poppins' lineHeight='46.69%' >{Text}</Typography>
    </BlueButtonContainer>
  );
}
