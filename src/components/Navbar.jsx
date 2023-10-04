import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import navIcon from "../media/react_logo.png";
import { Link } from "react-scroll";
import { styled } from "@mui/system";



const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
    "& a": {
      padding: "1rem",
      color: "#FFF",
      textDecoration: "none",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "#97fff4",
        color: "#000",
      },
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));
  return <Box sx={{flexGrow: 1, px:5, py: 2, maxWidth: "1200px", mx: "auto"}}>
    <AppBar 
      position = "fixed" 
      style= {{background: "rgba(147, 101, 229, 0.7)", boxShadow: "none", padding: "1rem 2rem"}}>
      <CustomToolbar>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
        <Link 
        to="home" 
        className="link" 
        smooth 
        offset={-80}>
          <Typography variant="h2"
          component="div" 
          sx={{ 
            flexGrow: 1, 
            fontSize: "1.2rem",
            fontWeight: "bold",
            textTransform: "uppercase", 
            letterSpacing: "5px", 
            textShadow: "0 0 10px rgba(0,0,0,.5)",
            fontFamily: "Monaco, sans-serif"
            }}>
            Dahlia Guido
          </Typography> 
          <Typography
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "uppercase", 
              letterSpacing: "4px", 
              textShadow: "0 0 10px rgba(0,0,0,.5)",
              marginLeft: "12%",
              fontFamily: "Monaco, sans-serif"
            }}>
              Web Developer</Typography> 
          </Link>        
        </Box>

       
         <CustomBox> 
          <Link 
             to="my-projects" 
             className="link" 
             smooth
             offset={-80}
          >
            Projects
          </Link>

          <Link 
            to="about" 
            className="link" 
            smooth
            offset={-80}>
            About
          </Link>

          <Link 
          to="contact" 
          className="link" 
          smooth 
          offset={-80}>
            Contact
          </Link>

          <Link to="resume" className="link" smooth>
            Resume
          </Link>
        </CustomBox>
      </CustomToolbar>
    </AppBar>
    <Toolbar />
  </Box>;
};

export default Navbar;
