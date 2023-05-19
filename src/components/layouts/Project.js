import {
  FlexContainer,
  Heading,
  IconContainer,
  PaddingContainer,
  ParaText,
  Button,
} from "../../styles/Global.styled";
import React from "react";

import { FaGithub } from "react-icons/fa";
import {
  ProjectImage,
  ProjectImageContainer,
  TechStackCard,
} from "../../styles/MyProjects.styled";

export const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
      <div>
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>

        <Button>Visit Website</Button>
      </div>
      <ProjectImageContainer justify="flex-end">
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};
