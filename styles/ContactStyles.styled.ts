import styled from "styled-components";
import { Container } from "./Container.styled";
import { IStyle } from "../ts-types/styleTypes";

export const ContactStyles = styled(Container)<IStyle>`
  margin-top: 100px;

  h3 {
    width: max-content;
    margin: auto;
  }

  footer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0;

    div {
      position: relative;
      width: 100%;

      img {
        max-width: 100%;
        height: auto;
      }

      h4 {
        margin-top: 15px;
      }
    }

    .wrapper {
      display: flex;
      margin-top: 25px;

      ul {
        flex-grow: 1;
        display: flex;
        justify-content: space-evenly;

        li {
          background: ${({ theme }) => theme.theme1.navBgCol};
          border: 2px solid ${({ theme }) => theme.theme1.navTextCol};
          border-radius: 10px;
          height: 40px;

          a {
            margin: 0;
          }
          svg {
            height: 20px;
          }

          &:first-child {
            margin-left: 0;
          }

          &:nth-of-type(3) {
            display: none;
          }
        }
      }
    }
  }

  p {
    margin-top: 30px;
  }
  span {
    display: block;
    font-size: small;
    text-align: center;
    padding: 20px;
  }

  @media (min-width: 576px) {
    margin-top: 150px;

    footer {
      .wrapper {
        ul {
          display: none;
        }
      }
    }
  }

  @media (min-width: 768px) {
    footer {
      div {
        width: 40%;
      }
    }
  }
`;
