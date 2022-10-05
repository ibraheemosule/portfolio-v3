import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export default styled.section<IStyle>`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  background: ${({ theme, darkMode }) =>
    darkMode ? theme.theme2.aboutBgCol : theme.theme1.aboutBgCol};
  transition: background-color 0.3s ease-in;

  h3 {
    margin: auto;
    text-align: center;
  }

  div {
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
  }

  .icon {
    flex-direction: column;
    flex-basis: 120px;
    text-align: center;

    h5 {
      margin: auto;
      margin-top: 5px;
      text-transform: uppercase;
    }

    svg {
      width: 50px;
      height: auto;
    }
  }

  @media (min-width: 500px) {
    .icon {
      flex-basis: 150px;
    }
  }

  @media (min-width: 768px) {
    .icon {
      flex-basis: 200px;
    }
  }
`;
