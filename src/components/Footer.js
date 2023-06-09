import {
  BlueText,
  FlexContainer,
  Heading,
  PaddingContainer,
  Button,
  ParaText,
  LinkText,
} from "../styles/Global.styled";
import { ContactForm, FormLabel, FormInput } from "../styles/Footer.styled";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email, message }),
    })
      .then(() => {
        toast.success("Message sent!");
      })
      .catch((error) => {
        toast.error("An error occurred.");
        console.error(error);
      });
  };

  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Get <BlueText>In Touch</BlueText>
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

            <PaddingContainer bottom="2rem" right="1rem">
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </PaddingContainer>

            <PaddingContainer bottom="2rem" right="1rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                as="textarea"
                name="message"
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <Button type="button" onClick={handleSubmit}>
                Send Message
              </Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
        <PaddingContainer justify="center" top="2rem" as={motion.div}>
          <ParaText
            as={motion.div}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            size="h2"
            align="center"
            top="0.5rem"
          >
            You can also reach me by email at{" "}
            <LinkText href="mailto:miganson@gmail.com">
              miganson@gmail.com
            </LinkText>
          </ParaText>
        </PaddingContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
