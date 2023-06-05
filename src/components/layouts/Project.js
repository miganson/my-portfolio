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
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

export const Project = ({ data }) => {
  return (
    <FlexContainer
      fullWidthChild
      direction={data.reverse ? "row-reverse" : false}
    >
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3">
            {data.project_name}
          </Heading>
          <a href={data.github_link} target="_blank" rel="noopener noreferrer">
            <IconContainer color="blue" size="2rem">
              <FaGithub />
            </IconContainer>
          </a>
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

        <Button
          href={data.project_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Button>
      </motion.div>
      <ProjectImageContainer
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify={data.reverse ? "flex-start" : "flex-end"}
      >
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};
