import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { contactUsBanner } from '@assets';
import config from '@config';
import { BlueButton, CustomTextField, CustomDropdown } from '../../components';
import { companySizeList, countryList, howCanWeHelpList } from './dropdownText';

const newCountryList = [];
countryList.map((ele) => newCountryList.push({ key: ele, value: ele }));

export default function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [country, setCountry] = useState('');
  const [helpTopic, setHelpTopic] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [displayMessage, setDisplayMessage] = useState('');
  const [charactersRemaining, setCharactersRemaining] = useState(500);
  const messageResponse = config.messages.contactForm;
  const [formIsValid, setFormIsValid] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const onSubmit = async () => {
    if (charactersRemaining < 0) {
      alert('Please ensure your message is 500 characters or less.');
    }

    if (!formIsValid) {
      alert('Please ensure all required fields are completed.');
    }

    try {
      const result = await axios.post(
        config.CONTACT_US_API_ENDPOINT,
        JSON.stringify({ firstName, lastName }),
        {
          params: {
            firstName,
            lastName,
            email,
            phoneNumber,
            companyName,
            companySize,
            country,
            helpTopic,
            message,
          },
        }
      );
      setSubmittedMessage(true);
      result.status === 200 ? setSubmitSuccess(true) : setSubmitSuccess(false);
    } catch (e) {
      setSubmittedMessage(true);
      setSubmitSuccess(false);
    }
  };

  const updateCompanySize = (e) => {
    setCompanySize(e);
  };
  const updateHelpTopic = (e) => {
    setHelpTopic(e);
  };

  const updateCountry = (e) => {
    setCountry(e);
  };

  const updateDisplayMessage = () => {
    if (submittedMessage && submitSuccess) {
      setDisplayMessage(messageResponse.success);
    }
    if (submittedMessage && !submitSuccess) {
      setDisplayMessage(messageResponse.error);
    }
    if (!submittedMessage) {
      setDisplayMessage('');
    }
  };

  useEffect(() => {
    updateDisplayMessage();
  }, [submittedMessage, submitSuccess]);

  useEffect(() => {
    setCharactersRemaining(500 - message.length);
  }, [message]);

  useEffect(() => {
    if (firstName && lastName && email && phoneNumber && companyName && message) {
      setFormIsValid(true);
    }
  }, [firstName, lastName, email, phoneNumber, companyName, message]);

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${contactUsBanner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '434.76px',
          backgroundPosition: 'center',
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography lineHeight="88.19%" variant="h2" fontWeight="500" marginLeft="10vw">
          Contact Us
        </Typography>
      </Box>
      <Box maxWidth="730px" margin="0 auto" paddingTop="169px">
        <Box padding="0px 8px">
          <Typography
            fontWeight="500"
            fontSize="32px"
            color="#FFFFFF"
            lineHeight="88.19%"
            fontFamily="Raleway"
            marginBottom="41px"
            textAlign="center"
          >
            Let us know how we can help
          </Typography>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                gap: '30px',
              }}
            >
              <CustomTextField
                name="First Name"
                label={firstName}
                type="text"
                onChangeFunc={setFirstName}
              />
              <CustomTextField
                name="Last Name"
                label={lastName}
                type="text"
                onChangeFunc={setLastName}
              />
            </Box>
            <Box
              sx={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                gap: '30px',
              }}
            >
              <CustomTextField name="Email" label={email} type="email" onChangeFunc={setEmail} />
              <CustomTextField
                name="Phone Number"
                label={phoneNumber}
                type="tel"
                onChangeFunc={setPhoneNumber}
              />
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(2,1fr)' },
                gap: '30px',
                alignItems: 'center',
                marginTop: '30px',
              }}
            >
              <CustomTextField
                name="Company Name"
                label={companyName}
                type="text"
                onChangeFunc={setCompanyName}
              />
              <CustomDropdown
                label="Company Size"
                value={companySize}
                items={companySizeList}
                onChangeFunc={updateCompanySize}
              />
            </Box>
            <Box marginTop="30px">
              <CustomDropdown
                label="Your Country"
                value={country}
                items={countryList}
                onChangeFunc={updateCountry}
              />
            </Box>
            <Box marginTop="30px">
              <CustomDropdown
                label="How Can We Help?"
                value={helpTopic}
                items={howCanWeHelpList}
                onChangeFunc={updateHelpTopic}
              />
            </Box>
            <Box marginTop="30px" backgroundColor="white" borderRadius="10px">
              <CustomTextField
                name="Message"
                label={message}
                type="text"
                onChangeFunc={setMessage}
                rows="8.5"
                multiline
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
