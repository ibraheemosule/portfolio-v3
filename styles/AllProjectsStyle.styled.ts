import styled from "styled-components";
import { MainBodyStyle } from "./MainBody.styled";
import { IStyle } from "../ts-types/styleTypes";

export const AllProjectsStyle = styled(MainBodyStyle)<IStyle>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0 100px 0;
  min-height: 100vh;

  @media (min-width: 576px) {
    min-width: 100vw;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .title {
      width: 100%;

      h3 {
        width: max-content;
        margin: auto;
      }
    }

    .card {
      flex-basis: 100%;
      height: 250px;
      margin-top: 50px;
      position: relative;
      overflow: hidden;
      background: hsl(0, 0%, 7%);
      border-radius: 10px;
      box-shadow: 2.5px 1.9px 4.6px rgba(0, 0, 0, 0.016),
        8.5px 6.5px 15.4px rgba(0, 0, 0, 0.024),
        38px 29px 69px rgba(0, 0, 0, 0.04);

      @media (min-width: 768px) {
        height: 280px;
        flex-basis: 40%;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        transition: all 0.3s ease-in;
      }

      .details {
        height: 80%;
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: ${({ theme }) => theme.theme1.aboutBgCol};
        border-top: 1px solid black;
        transform: translateY(200%);
        z-index: 2;
        transition: all 0.3s ease-in;

        .btn {
          margin-top: 0;
          font-size: small;
        }
      }

      &:hover {
        img {
          opacity: 0.5;
        }
        .details {
          transform: translateY(25%);
        }
      }
    }
  }
`;
