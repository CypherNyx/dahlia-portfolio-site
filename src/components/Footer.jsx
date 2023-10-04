import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";
import { BorderClear } from "@mui/icons-material";


const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #97FFF4", 
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column"}}>
        <Typography 
          variant="body" 
          sx={{ color: "#260d54", fontWeight: "bold", mb:2 }}
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
        
        {/* <Link 
          to="about" 
          className="link" 
          smooth 
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}>
          About
        </Link> */}
        
        <Link 
          to="resume" 
          className="link" 
          smooth 
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}>
          Resume
        </Link>        
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Typography 
          variant="body" 
          sx={{ color: "#260d54", fontWeight: "bold", mb:2 }}
        >
          SOCIAL
        </Typography>

        <a href="https://github.com/CypherNyx" target="_blank" style={{ textDecoration: "none", color: "white", width: "100%" }}rel="noopener noreferrer">        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            GitHub
          </Typography>
        </Box>
        </a>


        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <EmailIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            Email
          </Typography>
        </Box>

        <a href="https://www.linkedin.com/in/dahlia-guido/" target="_blank" style={{ textDecoration: "none", color: "white", width: "100%" }}rel="noopener noreferrer">
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <LinkedInIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            LinkedIn
          </Typography>
          </Box>
        </a>


      </Box>
    </Box>
  );
};

export default Footer;
