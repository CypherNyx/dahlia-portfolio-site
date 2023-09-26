import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import reactImg from "../media/react_svg.svg";



const Hero = () => {

const CustomButton = styled(Button)(({ theme }) => ({
  border: "3px solid transparent",
  backgroundColor: "#260d54",
  color: "white",
  width: "20%",
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
  }
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  }
}));



  return (
  <Box 
    sx={{ 
      mt: 8, 
      mb: 12, 
      p: 2, 
      maxWidth: "1200px", 
      mx:"auto"
    }} 
    id="home"
  >
    <Typography 
      sx = {{ color: "white", textAlign: "center", mb:2}} 
      variant="h6"
    >
      Full Stack MERN Developer
    </Typography>
    <CustomTitle variant="h1">
    Fusing creativity and <span style={{ color: "#9400FF"}}>programming</span> to build <span style={{ color: "#9400FF"}}>functional</span> web solutions

      
    </CustomTitle>
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            mt: 4,
            mb: 4,
          }}
          src={reactImg}
        />

        <CustomButton>Contact Me</CustomButton>
      </Box>
    </Box>


  );
};

export default Hero;
