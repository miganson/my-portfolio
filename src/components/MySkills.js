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

          <ParaText top="2rem">
            My toolkit? Front-end frameworks like React and Angular for crafting
            dynamic and responsive user interfaces. For the server side, I turn
            to Node.js and Express.js, creating sturdy and reliable backend
            applications
          </ParaText>
          <ParaText top="2rem">
            I also have some hands-on experience with AWS for those cloud-based
            needs, and PostgreSQL and MongoDB for managing data. From start to
            finish, I'm all about designing and implementing solutions that
            truly meet the needs of today's web applications.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};
