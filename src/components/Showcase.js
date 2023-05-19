import {
  BlueText,
  FlexContainer,
  Heading,
  PaddingContainer,
  ParaText,
  IconContainer,
} from "../styles/Global.styled";
import React from "react";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import {
  ShowcaseParticleContainer,
  BlinkingSpan,
  ShowcaseImageCard,
  Particle,
} from "../styles/Showcase.styled";
import ShowcaseImg from "../assets/showcase-image.png";
import BackgroundImg from "../assets/particle.png";

export const Showcase = () => {
  const calculateExperience = () => {
    const startDate = new Date("2020-08-01");
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
        {years} years, {months} months, and <BlinkingSpan>{days}</BlinkingSpan>{" "}
        {dayText}
      </React.Fragment>
    );
  };

  const experience = calculateExperience();
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="14%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        <div>
          <Heading size="h2">Hello!</Heading>
          <Heading size="h2" as="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Migs Anson!</BlueText>
          </Heading>
          <Heading size="h3" as="h3">
            I'm a Fullstack Developer
          </Heading>
          <ParaText>
             My name full name is Miguel Antonio J. Anson and I am a fullstack developer with{" "}
            {experience} worth of experience in learning, creating, and
            designing websites and web applications.
          </ParaText>

          <FlexContainer gap="20px">
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsFacebook />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsInstagram />
            </IconContainer>
          </FlexContainer>
        </div>

        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImageCard>
            <Particle
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              src={BackgroundImg}
              alt="particle"
              top="-50px"
              right="70px"
              rotate="00deg"
            />
            <Particle
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
