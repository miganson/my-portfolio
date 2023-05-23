import {
  BlueText,
  FlexContainer,
  Heading,
  PaddingContainer,
  ParaText,
  IconContainer,
} from "../styles/Global.styled";
import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import {
  ShowcaseParticleContainer,
  BlinkingSpan,
  ShowcaseImageCard,
  Particle,
} from "../styles/Showcase.styled";
import ShowcaseImg from "../assets/showcase-image.png";
import BackgroundImg from "../assets/particle.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

export const Showcase = () => {
  const calculateExperience = () => {
    const startDate = new Date("2020-12-04");
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44)
    );
    const days = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );
    const dayText = days === 1 ? "day" : "days";

    return (
      <React.Fragment>
        <BlueText>{years}</BlueText> years, <BlueText>{months}</BlueText>{" "}
        months, and{" "}
        <BlueText>
          <BlinkingSpan>{days}</BlinkingSpan>
        </BlueText>{" "}
        {dayText}
      </React.Fragment>
    );
  };

  const experience = calculateExperience();
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="center" fullWidthChild>
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading size="h2">Hello!</Heading>
          <Heading size="h2" as="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Migs Anson!</BlueText>
          </Heading>
          <Heading size="h3" as="h3">
            I'm a Fullstack Developer
          </Heading>
          <ParaText>
            Hello there! I'm Miguel Antonio J. Anson, but you can call me Miguel
            or Migs. I've been diving into the world of full-stack development
            for {experience}. I love learning new things, crafting beautiful
            websites, and designing functional web applications.
          </ParaText>

          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsInstagram />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        <FlexContainer
          justify="flex-end"
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 18, repeat: Infinity }}
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              as={motion.img}
              animate={{
                x: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              src={BackgroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};
