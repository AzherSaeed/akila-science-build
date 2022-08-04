import React from 'react';
import { Box, Typography } from '@mui/material';
import {BlueButtonContainer } from "@components/Buttons/BlueButton";
import {OutlineBlueButtons} from "@components/Buttons/OutlineBlueButtons";
import {BlueOutLineButton} from "../../components/Buttons/OutlineBlueButtons";

function Heading(props) {
  const { backgroundImage, title, subHeading } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '499px',
        overflow: 'hidden',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <Box margin="0 10vw" fontSize="2rem">
          <Typography
            fontFamily="Raleway"
            color="#E7E7E7"
            lineHeight="45px"
            variant="solutionsHeadingTitle"
          >
            {title}
          </Typography>
          <Box maxWidth="550px" paddingTop="24px" paddingBottom="50px">
            <Typography
              fontFamily="Raleway"
              fontWeight="500"
              color="#E7E7E7"
              fontSize="18px"
              lineHeight="25px"
            >
              {subHeading}
            </Typography>
          </Box>

            <Box display='Flex' maxWidth={352} gap={2} >
                <BlueButtonContainer  text="REQUEST A DEMO" path="/pricing"  >
                    REQUEST A DEMO
                </BlueButtonContainer>
                <BlueOutLineButton  text="Request a Demo" path="/contact-us"  >
                    SIGN UP
                </BlueOutLineButton>
            </Box>

        </Box>
      </div>
    </Box>
  );
}

export default Heading;
