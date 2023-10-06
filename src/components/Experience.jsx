import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";

const Experience = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my:12}} id="my-projects">
      <Typography 
        variant="h4" 
        sx={{color: "white", textAlign: "center", mb: 2}}
      >
        Recent {" "}
        <span style={{ color: "#FFFD8C"}}>web applications</span> I've developed.
      </Typography>

      <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {
          projects.map((project) => (
            <Project 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              tags={project.tags}
              img={project.image}
              source={project.source}
              liveVersion={project.liveVersion}
            />
          ))}
      </Box>

      <Stack />
    </Box>
  );
};

export default Experience;
