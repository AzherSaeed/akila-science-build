import React, { useState, useEffect } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { BlueLine } from '@components';
import { sideLine } from '@assets';
import axios from 'axios';
import config from '@config';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const [charactersRemaining, setCharactersRemaining] = useState(500);
  const contactAPI = `${config.apiGateway.contact}contact`;
  const messageResponse = config.messages.contactForm;

  const submitForm = async () => {
    try {
      const result = await axios.post(contactAPI, JSON.stringify({ firstName, lastName }), {
        params: {
          first_name: firstName,
          last_name: lastName,
          email,
          message,
        },
      });
      setSubmittedMessage(true);
      result.status === 200 ? setSubmitSuccess(true) : setSubmitSuccess(false);
    } catch (e) {
      setSubmittedMessage(true);
      setSubmitSuccess(false);
    }
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

  return (
    <Box my="10rem" className={styles.ContactUsMain}>
      <Box
        display={{
          xs: 'none',
          lg: 'unset',
        }}
      >
        <div className={styles.ContactusImgContainer}>
          <img src={sideLine} alt="sideLine" />
        </div>
      </Box>
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            mt: 3,
          }}
        >
          <h4 className={styles.ContactUsHeading}>Contact Us</h4>
          <Box mt="2.1rem">
            <BlueLine />
          </Box>
          <Box mt="7.3rem">
            <Stack my={2} spacing={2} direction={{ xs: 'column', sm: 'column' }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} gap={3}>
                <input
                  id={styles.ContactUsForm}
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  id={styles.ContactUsForm}
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'column' }} spacing={3}>
                <input
                  id={styles.ContactUsForm}
                  placeholder="Email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Message"
                  id={styles.ContactUsForm}
                  className="text-area"
                  rows="8"
                  cols="60"
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength="500"
                />
              </Stack>
              Characters Remaining: {charactersRemaining}
            </Stack>
          </Box>
          <Box width="40%">
            <Typography>{displayMessage}</Typography> <br />
          </Box>
          <button type="button" className={styles.SaveBtn} onClick={submitForm}>
            Send
          </button>
        </Box>
      </Container>
    </Box>
  );
}
