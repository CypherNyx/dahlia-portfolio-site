import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, styled, Typography, FormControl, OutlinedInput , InputLabel   } from "@mui/material";



const EmailForm = () => {

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#260d54",
    color: "white",
    width: "200px",
    height: "50px",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));
  
  const form = useRef();
  console.log(process.env.REACT_APP_PUBLIC_KEY);
  emailjs.init(process.env.REACT_APP_PUBLIC_KEY);

  const serviceEJS = process.env.REACT_APP_SERVICE_ID;
  const templateEJS = process.env.REACT_APP_TEMPLATE_ID;
    
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();


    
    emailjs.sendForm(serviceEJS, templateEJS, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
      setSent(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
    });
    
  };

  return (
    <Box
    component="form"
    ref={form}
    onSubmit={sendEmail}
      sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off" >
    <FormControl>
    <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput id="component-outlined" label="Name" name="user_name" 
        sx={{
          width: '100%',
          maxWidth: '400px',
          fontSize: '16px',
          }} />
        </FormControl>
        <FormControl>
      <InputLabel htmlFor="email" >Email</InputLabel>
    <OutlinedInput id="email" type="email" name="user_email" />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="message">Message</InputLabel>
    <OutlinedInput id="message" multiline rows={5} name="message" />
  </FormControl>
  {sent ? (
    <Typography variant="body1">Email sent successfully!</Typography> 
  ) : (
    <CustomButton type="submit" variant="contained">
    Send
  </CustomButton>
  )}

  
    </Box>
  );
};

export default EmailForm;