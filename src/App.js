import React from "react";
import { Container, MainBody, FadeImage } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { Showcase } from "./components/Showcase";
import { MySkills } from "./components/MySkills";
import { MyProjects } from "./components/MyProjects";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import TopFadeImage from "./assets/top.png";
import LeftFadeImage from "./assets/left.png";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <ToastContainer />
        <Navbar />
        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
        </Container>

        <FadeImage src={TopFadeImage} top="0" />
        <FadeImage src={LeftFadeImage} top="30vh" />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
