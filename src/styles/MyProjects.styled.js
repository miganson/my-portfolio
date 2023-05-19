import styled from "styled-components";

export const TechStackCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: inline-block;
  color: #fff;
  padding: 0.3 rem 1 rem;
  border-radius: 5px;
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
`;

export const ProjectImage = styled.img`
  border: 1px solid #fff;
  width: 80%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;
