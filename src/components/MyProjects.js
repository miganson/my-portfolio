import { BlueText, Heading, PaddingContainer } from "../styles/Global.styled";
import React from "react";

import { projectDetails } from "../utils/Data";
import { Project } from "./layouts/Project";

export const MyProjects = () => {
  return (
    <PaddingContainer id="Projects" top="5%" bottom="5%">
      <Heading as="h4" size="h4">
        My Projects
      </Heading>
      <Heading as="h2" size="h2">
        This part is <BlueText>under construction.</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} top="5rem" bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};
