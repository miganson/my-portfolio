import { BlueText, Heading, PaddingContainer } from "../styles/Global.styled";
import React from "react";

import { projectDetails } from "../utils/Data";
import { Project } from "./layouts/Project";

import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";

export const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
      >
        My Projects
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
      >
        These are projects <BlueText> I've worked on</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} top="5rem" bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};
