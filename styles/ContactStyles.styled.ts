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
      flex-wrap: wrap;
      min-height: 400px;
      margin-top: 25px;

      .feedback {
        flex-basis: 100%;
      }

      form {
        flex-basis: 100%;
        margin-bottom: 2rem;

        div {
          margin: 0.5rem 0 2rem;
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          label {
            display: block;
            font-weight: 600;
            flex-basis: 100%;
            text-transform: capitalize;
          }

          input,
          textarea {
            all: unset;
            flex-basis: 100%;
            display: block;
            border-bottom: 1px solid
              ${({ theme, darkMode }) =>
                darkMode ? theme.theme1.navTextCol : theme.theme1.navBgCol};
            color: inherit;
            caret-color: #2c344a;
            padding: 0.5rem;
            background: transparent;
            font-size: 1rem;
            font-weight: 300;
            letter-spacing: 0.1rem;
          }

          input:focus {
            outline: none;
          }

          textarea {
            resize: none;
            border: 1px solid
              ${({ theme, darkMode }) =>
                darkMode ? theme.theme1.navTextCol : theme.theme1.navBgCol};
            border-radius: 5px;
            height: 100px;
            margin-top: 1rem;
          }
        }

        .btn-wrapper {
          display: flex;
          position: relative;
          align-items: center;
          flex-basis: 100%;
          justify-content: flex-start;

          button:nth-child(2) {
            justify-self: center;
            margin: auto;
          }

          span {
            position: absolute;
            width: 100%;
            text-align: right;
            bottom: -5px;
            font-weight: bold;
          }
        }
      }

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
        width: 100%;

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

  @media (min-width: 1024px) {
    footer {
      .wrapper {
        form {
          .btn-wrapper {
            span {
              text-align: center;
            }
          }
        }
      }
    }
  }
`;
