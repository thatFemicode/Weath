import styled from "styled-components";
export const HomeStyled = styled.main`
  color: #000;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  padding: 3rem;
  @media (max-width: ${({ theme }) => theme.service}) {
    padding: 1.5rem;
    padding-top: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    padding: 0.5rem;
  }
`;
