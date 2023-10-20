import React, { useRef } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import resumeDownload from '../media/dahlia_guido_resume_download.pdf'
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import techie from "../media/tech.json"





const Home = () => {

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

  const techieRef = useRef < LottieRefCurrentProps > (null);


  return (
    <Box id="home" className="banner" sx={{ position: 'relative', zIndex: 10 }} >
      <Box id="foreground"
        sx={{
          mt: 15,
          mb: 4,
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
        <CustomTitle variant="h1" sx={{ textShadow: "7px 3px 4px rgba(51, 10, 106, 1)" }}>
               creating <span style={{ color: "#97FFF4" }}>intuitive</span> web <br />solutions through <span style={{ color: "#97FFF4" }}>code. </span>
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

        <Lottie
          onComplete={() => {
            techieRef.current?.goToAndPlay(37, true)
          }}
          animationData={techie}
          style={{ width: "18rem", height: "auto" }}
          loop="false"
          lottieRef={techieRef}

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

export default Home;
