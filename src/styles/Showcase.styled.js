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
  padding-left: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ShowcaseImageCard = styled.div`
  border: 1px solid white;
  width: max-content;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  img {
    width: 400px;
    height: auto;
  }
`;

export const Particle = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  transform: rotate(${({ right }) => right});
`;
