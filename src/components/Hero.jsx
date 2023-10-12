import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import reactImg from "../media/react_svg.svg";
import resumeDownload from '../media/dahlia_guido_resume_download.pdf'
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';





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
    <Box id="parallaxBkg" className="hero" style={{zIndex: -1}} >
      <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation parallax'>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="imgBackgroundBase"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="imgBackgroundGlitter"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="imgThirdRow"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.15}>
          <div className="animation_layer parallax" id="imgSecondRow"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.25}>
          <div className="animation_layer parallax" id="imgFirstRow"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={-0.35}> 
          <Box id="foreground"
            sx={{
              mt: 18,
              mb: 8,
              p: 2,
              maxWidth: "1200px",
              mx: "auto"
            }} >
            <Typography
              sx={{ color: "#FFEB3B", textAlign: "center", mb: 2, textShadow: "5px 1px 6px rgba(75, 34, 166, 1)", }}
              variant="h6"
            >
              Full Stack MERN Developer
            </Typography>
            <CustomTitle variant="h1">
              I enjoy <span style={{ color: "#97FFF4" }}>building</span> and <span style={{ color: "#97FFF4" }}>designing</span> for the web.

            </CustomTitle>
          </Box>

          <Box id="callToActionButtons"
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
                mt: 1,
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
        </ParallaxLayer> */}

      </Parallax>



    </Box>


  );
};

export default Hero;
