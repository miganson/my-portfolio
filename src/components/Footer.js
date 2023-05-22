import {
  BlueText,
  FlexContainer,
  Heading,
  PaddingContainer,
  Button,
} from "../styles/Global.styled";
import { ContactForm, FormLabel, FormInput } from "../styles/Footer.styled";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";

export const Footer = () => {
  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            name="contact"
            method="POST"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />

            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                as="textarea"
                name="message"
                placeholder="Enter your message"
              />
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <Button type="submit">Send Message</Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
