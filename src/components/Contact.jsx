import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailForm from './EmailForm';

  const Contact = () => {

    const CustomButton = styled(Button)(({ theme }) => ({
      border: "3px solid white",
      borderRadius: "25px",
      color: "white",
      width: "15%",
      display: "block",
        "&:hover": {
          border: "3px solid #00C7FF",
          },
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "75%",
      },
    }));

    return (
      <Box sx={{ maxWidth: "1300px", my: 3, padding: 3, mx: "auto"}} id="about" >
         <Typography
        variant="h4"
        sx={{ color: "white", mt: 12, textAlign: "center" }}
        id= "contact"
      >
        Interested in Working Together?
      </Typography>
      <CustomButton
        variant="outlined"
        sx={{
          mx: "auto",
          mt: 3,
          mb: 8,
        }}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
        <LinkedInIcon style={{ color: '#FFF', height: "28", width: "28"}} />&nbsp; Let's connect!</span> 
      </CustomButton>
      <EmailForm />
      </Box>
    );




  };

  export default Contact;
