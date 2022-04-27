import styled, { css } from "styled-components";
const p = css`
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
const PS = css`
  font-size: 0.9rem;
  color: #fff;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.mobil}) {
    font-size: 0.8rem;
  }
`;
const h1 = css`
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

export const WeatherDetailsStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .weather-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    /* justify-content: center; */
    @media (max-width: ${({ theme }) => theme.nav}) {
      flex-direction: column-reverse;
    }
  }
  .details {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    @media (max-width: ${({ theme }) => theme.nav}) {
      width: 100%;
      height: 70%;
    }
    .top {
      width: 100%;
      &-main {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      p {
        ${p}
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      text-align: center;
      width: 100%;
      height: 100%;
      overflow: hidden;
      /* margin: 1rem auto; */
      @media (max-width: ${({ theme }) => theme.nav}) {
        flex-direction: column;
      }

      h1 {
        ${h1}
      }
      p {
        ${PS}
      }
      &-main {
        display: flex;
        justify-content: space-around;
        text-align: center;
        flex-direction: column;
        padding: 1rem;
        border-radius: 12px;
        /* background-color: rgba(255, 255, 255, 0.2); */
        background: rgba(0, 0, 0, 0.5);
        width: 120px;
        height: 350px;
        @media (max-width: ${({ theme }) => theme.nav}) {
          flex-direction: row;
          width: 100%;
          height: unset;
        }
      }
    }
  }
  .search {
    height: 100%;
    position: relative;
    width: 40%;
    padding-left: 3rem;
    @media (max-width: ${({ theme }) => theme.nav}) {
      width: 100%;
      padding-left: 0rem;
      margin-bottom: 5rem;
      height: 30%;
    }
    form {
      display: flex;
      flex-direction: column;
      input {
        padding: 0.55rem 0.4rem;
        border: 1px solid rgb(184, 196, 194);
        border-radius: 4px;
        font-size: 14px;
        outline: none;
        transition: all 150ms ease-in-out 0s;
        width: 65%;
        background: rgb(255, 255, 255);

        &::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`;
export const ButtonStyled = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.85rem;
  border-radius: 8px;
  border-color: transparent;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  cursor: none;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 120px;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    font-size: 0.8rem;
  }
`;
