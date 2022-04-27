import styled, { css } from "styled-components";
const margin = css`
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.service}) {
    margin-bottom: 0;
  }
`;
const h2 = css`
  font-size: 5.5rem;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.service}) {
    font-size: 4.5rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    font-size: 3.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    font-size: 2.5rem;
  }
`;
const h3 = css`
  font-size: 1.4rem;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.service}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    font-size: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    font-size: 0.8rem;
  }
`;

export const TimeStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;

  .button {
    position: absolute;
    right: 0;
    top: 5rem;
    @media (max-width: ${({ theme }) => theme.make}) {
      top: 3rem;
    }
  }
  h3 {
    ${h3}
  }
  h2 {
    ${h2}
  }
  .greeting-container {
    display: flex;
    align-items: center;
    ${margin}
    img {
      margin-right: 2rem;
      width: 50px;
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 30px;
        margin-right: 1rem;
      }
    }
  }
`;
