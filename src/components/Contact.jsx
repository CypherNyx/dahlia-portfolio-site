import React, { useState } from "react";
import { Box, Button, Typography, styled, Tooltip, ClickAwayListener } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";
import ResumePDF from "../constants/resume";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EmailForm from './EmailForm';

  const Contact = () => {

    const CustomButton = styled(Button)(({ theme }) => ({
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

    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText("dguido.dev@gmail.com");
  };

  const handleClickAway = () => {
    setOpen(false);
  };

    return (
      <Box sx={{ maxWidth: "1300px", my: 3, padding: 3, mx: "auto"}} id="about" >
         <Typography
        variant="h4"
        sx={{ color: "white", mt: 12, textAlign: "center" }}
        id= "contact"
      >
        Interested in Working Together?
      </Typography>

      <Box
          
        >
      <CustomButton
        variant="outlined"
        sx={{
          border: "3px solid white",
          mx: "auto",
          mt: 4,
          mb: 3,
        }}
      >
        <a href="https://www.linkedin.com/in/dahlia-guido/" target="_blank" style={{ textDecoration: "none", color: "white" }}rel="noopener noreferrer">
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
        <LinkedInIcon style={{ color: '#FFF', height: "28", width: "28"}} />&nbsp; Let's connect on LinkedIn</span> 
        </a>
      </CustomButton>
      
      
      <ClickAwayListener onClickAway={handleClickAway}>
        <Tooltip open={open} title="Email copied!" placement="top">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2, cursor: "pointer" }}>
          <EmailIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }} onClick={handleClick}>
            dguido.dev@gmail.com
          </Typography>
        </Box>
        </Tooltip>
        </ClickAwayListener>
      </Box>
      <EmailForm />
      </Box>
    );




  };

  export default Contact;
