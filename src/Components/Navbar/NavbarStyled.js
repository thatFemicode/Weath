import styled from "styled-components";

export const NavbarStyled = styled.nav`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  .navigation {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    .logo {
      @media (max-width: ${({ theme }) => theme.images}) {
        width: 55px;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 35px;
      }
    }

    .hashtag {
      font-size: 1.1rem;
      @media (max-width: ${({ theme }) => theme.mobil}) {
        font-size: 1rem;
      }
    }
  }
`;
