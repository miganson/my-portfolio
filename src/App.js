import React from "react";
import { Container, MainBody } from "./styles/Gloval.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container> 
          
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
