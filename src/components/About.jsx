import { Avatar, Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import Testimonial from "./Testimonial";
import dahliaAvatar from "../media/dahliaAvatar.png";



const About = () => {
  
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

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

  const AvatarBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex", 
    justifyContent: "space-between", 
    mx: "auto", 
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  }));

  
  const TextBox = styled(Box)(({ theme }) => ({
    marginLeft: "1.5rem",
    flex: 1,
    display: "flex", 
    justifyContent: "space-around", 
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));

  
  
  
  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }} id="about">
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", textAlign: "center" }}
        >
          Howdy! I'm Dahlia,
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "60%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <AvatarBox sx={{ my: 7, padding: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
      <Avatar
          alt="Dahlia's profile picture"
          src={dahliaAvatar}
          sx={{ width: 400, height: 400 }}
        />
      </Box>
      <TextBox>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="body1" color="white" sx={{ maxWidth: 575, margin: "1rem"}}>
          I am a full-stack developer driven to build fast, responsive websites with appealing and intuitive interfaces. Having recently graduated from the University of Texas at Austin's Full-Stack Coding Bootcamp, I'm eager to grow my skills in a role focused on continuous learning and development.
          </Typography>

          <Typography variant="body1" color="white" sx={{ maxWidth: 575, margin: "1rem"}}>
          With a blend of creative and analytical strengths, I'm passionate about crafting user-friendly digital experiences. I believe deeply in the web's power to connect, engage, and promote accessibility.
          </Typography>

          <Typography variant="body1" color="white" sx={{ maxWidth: 575, margin: "1rem"}}>
          Please explore my portfolio - I'd love to discuss how we can work together to build products that are both aesthetically and functionally exceptional. As a developer dedicated to constant improvement, I'm excited to push my abilities further and deliver solutions that positively impact users. Let's collaborate to make the web more innovative, connected, and inclusive.
          </Typography>
          </Box>
      </TextBox>

        
      </AvatarBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>

      
      {/*** Future Section for Formal Endorsements: **** 
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", textAlign: "center" }}
        >
          What people say about my work!
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <CustomBox sx={{ my: 7 }}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>
 */}


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
        Get in Touch
      </CustomButton>
    </Box>
  );
};

export default About;
