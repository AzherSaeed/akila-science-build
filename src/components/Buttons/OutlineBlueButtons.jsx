import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, styled, Typography} from "@mui/material";



export  const BlueOutLineButton = styled(Button)(() => ({
    background : 'transparent',
    borderRadius : '24px',
    padding : '16px 35px',
    color : '#FFFFFF',
    width : 'max-content',
    border: '1px solid #0398E1',

}))

export default function OutlineBlueButtons({ onClick, path }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (path) {
            navigate(path);

            onClick();
        }
    };

    return (
        <BlueOutLineButton className="btn-blue" type="button" onClick={handleClick}>
            <Typography fontSize={16} fontWeight={400} fontFamily='Poppins' lineHeight='46.69%' >{Text}</Typography>
        </BlueOutLineButton>
    );
}
