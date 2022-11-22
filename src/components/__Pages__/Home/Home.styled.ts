import styled from "styled-components";
import { IStyle } from "../../../ts-types/styleTypes";

export const MainBodyStyle = styled.main<IStyle>`
  transition: background-color 0.3s ease-in;
  padding-top: 10vh;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.bgCol : theme.theme1.bgCol};
  color: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.titleCol : theme.theme1.titleCol};
  flex: 1 1;
  overflow-y: scroll;

  @media (min-width: 576px) {
    padding-top: 0;
    margin-left: 50px;
  }
`;
