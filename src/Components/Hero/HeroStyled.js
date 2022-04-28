import styled from "styled-components";

export const HeroStyled = styled.section`
  padding: 3rem;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.service}) {
    padding: 1.5rem;
    padding-top: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.images}) {
    padding: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    padding: 0.5rem;
  }
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1.5rem;

    @media (max-width: ${({ theme }) => theme.service}) {
      flex-direction: column;
      padding: 1rem;
    }
    .left {
      height: 100%;
      flex: 2 0 50%;
      width: 100%;
      position: relative;
      color: #222;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (min-height: 1025px) and (max-height: 1366px) and (max-width: 1024px) {
        display: unset;
      }
      @media (max-width: ${({ theme }) => theme.dont}) {
        flex: 2 0 60%;
      }

      @media (max-width: ${({ theme }) => theme.desktop}) {
        flex: unset;
      }
      h1 {
        font-size: 4rem;
        @media (max-width: ${({ theme }) => theme.dont}) {
          font-size: 3.5rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 2rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1.5rem;
        }
      }
      p {
        line-height: 1.6;
        max-width: 450px;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
        @media (max-width: ${({ theme }) => theme.dont}) {
          max-width: 350px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 0.9rem;
          max-width: 300px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 0.8rem;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          font-size: 0.75rem;
        }
      }
      .cloud {
        position: absolute;
        top: 60px;
        @media screen and (min-height: 1025px) and (max-height: 1366px) and (max-width: 1024px) {
          right: 30px;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          right: 100px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          top: 150px;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          top: 100px;
          right: 50px;
        }
        img {
          @media (max-width: ${({ theme }) => theme.images}) {
            width: 30px;
          }
        }
      }
      .button {
        position: absolute;
        right: 100px;
        bottom: -20px;
        @media screen and (min-height: 1025px) and (max-height: 1366px) and (max-width: 1024px) {
          top: 400px;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          right: 20%;
          bottom: 10px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          right: 20%;
          bottom: 10px;
        }
      }
    }

    .right {
      flex: 1 0 40%;
      width: 100%;
      /* padding: 1.5rem; */
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      color: #444;
      @media (max-width: ${({ theme }) => theme.desktop}) {
        flex: unset;
      }
      .card {
        position: relative;
        /* min-width: 240px; */
        width: 100%;
        height: 100%;
        /* background: rgb(250, 235, 215); */
        background: rgb(230, 245, 255);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        /* box-shadow: rgb(24 32 79 / 25%) 0px 40px 80px,
          rgb(255 255 255 / 50%) 0px 0px 0px 0.5px inset; */
        padding: 50px 20px;
        max-width: 520px;
        max-height: 550px;
        border-radius: 20px;
        z-index: 2;
        @media (max-width: ${({ theme }) => theme.dont}) {
          max-width: 450px;
          height: 550px;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          height: 100%;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          max-width: 400px;
        }
        h1 {
          font-size: 2.5rem;
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 1.5rem;
          }
        }
        p {
          font-size: 6rem;
          @media (max-width: ${({ theme }) => theme.dont}) {
            font-size: 4.5rem;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            font-size: 3.5rem;
          }
          @media (max-width: ${({ theme }) => theme.mobil}) {
            font-size: 3rem;
          }
        }
        .sun {
          position: absolute;
          left: 30px;
          top: 60px;
          img {
            @media (max-width: ${({ theme }) => theme.images}) {
              width: 30px;
            }
          }
        }
        .rain {
          position: absolute;
          right: 30px;
          bottom: 150px;
          img {
            @media (max-width: ${({ theme }) => theme.images}) {
              width: 30px;
            }
          }
        }
        &-details {
          width: 100%;
          display: flex;
          justify-content: space-around;

          p {
            font-size: 1.8rem;
            @media (max-width: ${({ theme }) => theme.dont}) {
              font-size: 1.3rem;
            }
            @media (max-width: ${({ theme }) => theme.images}) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
