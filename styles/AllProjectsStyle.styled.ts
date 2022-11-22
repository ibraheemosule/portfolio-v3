import styled from "styled-components";
import { MainBodyStyle } from "./MainBody.styled";
import { IStyle } from "../ts-types/styleTypes";

export const AllProjectsStyle = styled(MainBodyStyle)<IStyle>`
  display: flex;
  min-width: 100%;
  margin: 0;
  flex-direction: column;
  justify-content: space-between;
  padding: 9.375rem 0.9rem 100px;
  min-height: 100vh;

  .container {
    display: flex;
    flex-basis: 100%;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-around;

    .title {
      width: 100%;

      h3 {
        width: max-content;
        margin: auto;
      }
    }

    @keyframes fade {
      from {
        transform: scale(0.95);
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .card {
      flex-basis: 100%;
      opacity: 0;
      height: 250px;
      margin-top: 50px;
      position: relative;
      overflow: hidden;
      background: hsl(0, 0%, 7%);
      border-radius: 10px;
      box-shadow: 2.5px 1.9px 4.6px rgba(0, 0, 0, 0.016),
        8.5px 6.5px 15.4px rgba(0, 0, 0, 0.024),
        38px 29px 69px rgba(0, 0, 0, 0.04);
      animation-name: fade;
      animation-duration: 0.75s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      z-index: 1;

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
        background: ${({ theme, darkMode }) =>
          darkMode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol};
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
  @media (min-width: 500px) {
    padding: 20vh 50px 100px 50px;
  }

  @media (min-width: 576px) {
    padding: 50px 50px 100px 100px;
  }

  @media (min-width: 650px) {
    padding: 50px 80px 100px 100px;
  }

  @media (min-width: 700px) {
    padding: 50px 100px 100px 100px;
  }

  @media (min-width: 768px) {
    padding: 50px 0 100px 60px;

    .container {
      .card {
        height: 280px;
        flex-basis: 45%;
      }
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: 95%;

      .card {
        flex-basis: 45%;
      }
    }
  }

  @media (min-width: 1240px) {
    .container {
      max-width: 80%;

      .card {
        flex-basis: 45%;
      }
    }
  }
`;
