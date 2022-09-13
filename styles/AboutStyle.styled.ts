import styled from "styled-components";
import { HeroStyle } from "./Hero.styled";
import { IStyle } from "../ts-types/styleTypes";

export const AboutStyle = styled(HeroStyle)<IStyle>`
  position: relative;
  width: 100%;
  margin-top: -20px;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol};
  transition: background-color 0.3s ease-in;

  section {
    z-index: 1;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 0;
  }

  div {
    z-index: 1;

    h3 {
      text-align: center;
      margin: auto;
    }
  }

  div.title {
    align-items: flex-start;
    padding: 0 15px 0 15px;
    display: flex;
    align-self: stretch;
    flex-direction: column;
  }

  svg {
    position: absolute;
    width: 100%;
    top: -50%;
    color: ${({ theme, darkMode }) =>
      darkMode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol};
    transition: color 0.3s ease-in;
  }

  @media (min-width: 768px) {
    div.title {
      padding: 50px;
    }
  }

  @media (min-width: 1024px) {
    div.title {
      padding: 100px 150px 50px 50px;
    }
  }
`;
