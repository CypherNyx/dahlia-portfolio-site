import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import reactImg from "../media/react_svg.svg";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';



const Hero = () => {

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
      sx = {{ color: "#260d54", textAlign: "center", mb:2}} 
      variant="h6"
    >
      Full Stack MERN Developer
    </Typography>
    <CustomTitle variant="h1">
    I enjoy <span style={{ color: "#97FFF4"}}>building</span> and <span style={{ color: "#97FFF4"}}>designing</span> for the web.
  
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            gap: "1rem",
          }}
        >

        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
          >
          <CustomButton>Contact Me</CustomButton>
        </Link>
          
        <Link 
          to="about" 
          smooth={true} 
          duration={500}
         >
          <CustomButton ><span><CloudDownloadIcon style={{ color: '#CCCCCC', }} /> &nbsp; </span> Resume</CustomButton>
        </Link>
        </Box>
        
      </Box>
    </Box>


  );
};

export default Hero;
