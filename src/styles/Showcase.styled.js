import styled, { keyframes } from "styled-components";

export const BlinkingSpan = styled.span`
  animation: ${keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`} 1s infinite;
`;

export const ShowcaseParticleContainer = styled.div`
  position: relative;
`;

export const ShowcaseImageCard = styled.div`
  border: 1px solid white;
  width: max-content;
  padding-top: 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`;

export const Particle = styled.div`
  positions: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  transform: rotate(${({ right }) => right});
`;
