import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const AboutStyle = styled.section<IStyle>`
  position: relative;
  width: 100%;
  margin-top: -20px;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol};
  transition: background-color 0.3s ease-in;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    align-items: center;
    line-height: 1.5rem;
    letter-spacing: 2px;
    padding-right: 15px;
    padding-left: 15px;

    .title {
      align-items: flex-start;
      margin-top: 2rem;
      padding: 0 1rem 0 1rem;
      display: flex;
      align-self: stretch;
      flex-direction: column;

      & > a {
        margin-top: 1rem;
        margin-right: auto;
      }
    }

    @media (min-width: 768px) {
      .title {
        flex-basis: 50%;
        margin-top: 0;
        padding: 3rem;
        align-self: center;
      }
    }

    @media (min-width: 1024px) {
      .title {
        padding: 5rem;
        align-self: center;
        line-height: 1.75rem;
      }
    }

    @media (min-width: 1240px) {
      .title {
        line-height: 2rem;
      }
    }

    @media (min-width: 1340px) {
      align-items: center;

      div.title {
        align-items: center;
        margin-top: 0;

        p {
          padding-right: 7rem;
        }
      }
    }
  }

  @media (min-width: 1240px) {
    .about-title {
      margin-bottom: -3rem;
    }
  }

  @media (min-width: 1400px) {
    .about-title {
      margin-bottom: -5rem;
    }
  }

  h3 {
    text-align: center;
    margin: auto;
  }
`;
