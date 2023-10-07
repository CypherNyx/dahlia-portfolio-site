import { Box, Typography, Tooltip, ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SourceIcon from '@mui/icons-material/Source';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import resumeView from '../media/dahlia_guido_resume_view.pdf'
import { Link } from "react-scroll";
import { BorderClear } from "@mui/icons-material";


const Footer = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText("dguido.dev@gmail.com");
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  
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
          style={{ color: "white", margin: "0.5rem 0", display: "flex", alignItems: "center", cursor: "pointer" }}>
          <HomeIcon style={{ color: '#FFF', }} /> <span  style={{ marginLeft: "0.5rem" }}> Home</span> 
        </Link>
        
        <Link 
          to="my-projects" 
          className="link" 
          smooth 
          style={{ color: "white", margin: "0.5rem 0", display: "flex", alignItems: "center", cursor: "pointer" }}>
          <SourceIcon style={{ color: '#FFF', }} /> <span  style={{ marginLeft: "0.5rem" }}> Projects</span> 
        </Link>
        
        {/* <Link 
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
        </Link>   */}

        <Link href={resumeView} className="link" target = "_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", margin: "0.5rem 0", display: "flex", alignItems: "center" }}>
          <OpenInNewIcon style={{ color: '#FFF', }} /> <span  style={{ marginLeft: "0.5rem" }}> Resume</span> 
          </Link> 

      </Box>

      <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Typography 
          variant="body" 
          sx={{ color: "#260d54", fontWeight: "bold", mb:2 }}
        >
          SOCIAL
        </Typography>

        <a href="https://github.com/CypherNyx" target="_blank" style={{ textDecoration: "none", color: "white", width: "100%" }}rel="noopener noreferrer">        <Box sx={{ display: "flex", alignItems: "center",margin: "0.5rem 0", cursor: "pointer" }}>
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }}>
            GitHub
          </Typography>
        </Box>
        </a>


        <ClickAwayListener onClickAway={handleClickAway}>
        <Tooltip open={open} title="Email copied!" placement="top">
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <EmailIcon sx={{ mr: 2, color: "white" }} />
          <Typography variant="body2" sx={{ color: "white", my: 1 }} onClick={handleClick}>
            dguido.dev@gmail.com
          </Typography>
        </Box>
        </Tooltip>
        </ClickAwayListener>

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
