import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import reactImg from "../media/react_svg.svg";
import resumeDownload from '../media/dahlia_guido_resume_download.pdf'
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HomeBanner from './HomeBanner';





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
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="animation_layer parallax" >
            
          </div>
        </ParallaxLayer>
        

      </Parallax>



    </Box>


  );
};

export default Hero;
