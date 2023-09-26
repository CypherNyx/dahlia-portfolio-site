import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #9400FF", 
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column"}}>
        <Typography 
          variant="body" 
          sx={{ color: "#9400FF", fontWeight: "bold", mb:2 }}
        >
          PAGES
        </Typography>

        <Link 
          to="home" 
          className="link" 
          smooth 
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}>
          Home
        </Link>
        
        <Link 
          to="my-projects" 
          className="link" 
          smooth 
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}>
          Projects
        </Link>
        
        <Link 
          to="about" 
          className="link" 
          smooth 
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}>
          About
        </Link>
        
        <Link 
          to="resume" 
          className="link" 
          smooth 
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}>
          Resume
        </Link>
        
      </Box>
    </Box>
  );
};

export default Footer;
