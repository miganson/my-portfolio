import {
  BlueText,
  FlexContainer,
  Heading,
  IconContainer,
  PaddingContainer,
  ParaText,
} from "../styles/Global.styled";
import React from "react";

import { SkillsCard, SkillsCardContainer } from "../styles/MySkills.styled";
import { Skills } from "../utils/Data";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

export const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        responsiveFlex
        responsiveDirection="column-reverse"
        fullWidthChild
      >
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill) => (
            <SkillsCard>
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>

        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            MY SKILLS
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            What <BlueText>I've learned to do</BlueText>
          </Heading>

          <ParaText top="2rem" bottom="1.5rem">
            As a Fullstack Developer, I have expertise in building dynamic and
            responsive user interfaces using React and Angular, as well as
            developing robust backend applications with Node.js and Express.js.
            I also have experience working with cloud services such as AWS and
            databases such as PostgreSQL and MongoDB, allowing me to design and
            implement end-to-end solutions that meet the demands of modern web
            applications.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};
