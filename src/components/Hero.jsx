import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import reactImg from "../media/react_svg.svg";
import resumeDownload from '../media/dahlia_guido_resume_download.pdf'
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import gradientBKG from '../media/01_parallax_bkg_base.png';
import Glitter from '../media/Stars1.gif';
import ThirdRow from '../media/03_parallax_3rd_row.png';
import SecondRow from '../media/04_parallax_2nd_row.png';
import FirstRow from '../media/05_parallax_1st_row.png';




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
    <Box id="home" className="hero" >

      <img src={gradientBKG} className="gradientBKG background" />
      <img src={Glitter} className="glitter background" />
      <img src={ThirdRow} className="ThirdRow background" />
      <img src={SecondRow} className="SecondRow background" />
      <img src={FirstRow} className="FirstRow foreground" />

      <Box className="foreground"
        sx={{
          mt: 8,
          mb: 12,
          p: 2,
          maxWidth: "1200px",
          mx: "auto"
        }} >
        <Typography
          sx={{ color: "#260d54", textAlign: "center", mb: 2 }}
          variant="h6"
        >
          Full Stack MERN Developer
        </Typography>
        <CustomTitle variant="h1">
          I enjoy <span style={{ color: "#97FFF4" }}>building</span> and <span style={{ color: "#97FFF4" }}>designing</span> for the web.

        </CustomTitle>
      </Box>

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
            <CustomButton style={{ minWidth: "120px" }}><span>Contact Me</span></CustomButton>
          </Link>


          <CustomButton style={{ minWidth: "120px" }} >
            <a href={resumeDownload} download style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center" }}>
              <CloudDownloadTwoToneIcon style={{ color: '#FFF', }} /> <span style={{ marginLeft: "0.5rem" }}> Resume</span>
            </a>
          </CustomButton>

        </Box>


      </Box>
    </Box>


  );
};

export default Hero;
