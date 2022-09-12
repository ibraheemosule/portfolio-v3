import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export default styled.section<IStyle>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  overflow-x: clip;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol};
  transition: background-color 0.3s ease-in;
  margin-bottom: -20px;

  @media (min-width: 768px) {
    padding-top: 50px;
  }

  h3 {
    margin: auto;
    text-align: center;
    z-index: 1;
  }

  div {
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .icon {
    flex-direction: column;
    flex-basis: 150px;
    text-align: center;
    justify-content: space-between;
    z-index: 1;

    @media (min-width: 500px) {
      flex-basis: 200px;
    }

    @media (min-width: 500px) {
      flex-basis: 200px;
    }
    @media (min-width: 850px) {
      flex-basis: 25%;
    }

    h5 {
      margin: auto;
      margin-top: 5px;
    }

    svg {
      width: 50px;
      height: auto;
    }
  }
`;
