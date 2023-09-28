import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, styled, Typography } from "@mui/material";
// import dotenv from 'dotenv';


// dotenv.config();


const EmailForm = () => {
  const form = useRef();

  // const serviceEJS = process.env.SERVICE_ID;
  // const templateEJS = process.env.TEMPLATE_ID;
  // const keyEJS = process.env.API_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('serviceEJS, templateEJS, form.current, keyEJS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box >
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </Box>
  );
};

export default EmailForm;