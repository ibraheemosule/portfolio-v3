import styled from "styled-components";
import { Row } from "../others/Row.styled";
import { IStyle } from "../../ts-types/styleTypes";

export const LayoutStyle = styled(Row)<IStyle>`
  height: 100vh;
  position: relative;
  max-width: 1500px;
  margin: auto;
  display: block;
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.titleCol : theme.theme1.titleCol};

  .darkmode {
    position: absolute;
    top: 10%;
    right: 5%;
    z-index: 1;
    outline: none;
    border-radius: 5px;
    border: none;
    overflow: hidden;
    background: transparent;
    cursor: pointer;

    span {
      display: block;
      padding: 0.1rem 0.3rem;
      font-size: 0.6rem;
      font-weight: bold;
      background: #c1d16a;
    }
    .light {
      background: ${({ darkMode }) => (darkMode ? "#2C344A" : "#c1d16a")};
      color: ${({ darkMode }) => (darkMode ? "#2C344A" : "")};
    }
    .dark {
      background: ${({ darkMode }) => (darkMode ? "#c1d16a;" : "#2C344A")};
      color: ${({ darkMode }) => (darkMode ? "" : "#2C344A")};
    }
  }

  @media (min-width: 576px) {
    display: flex;
    .darkmode {
      top: 2%;
    }
  }
`;
