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
    z-index: 1;
  }

  div {
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0;
  }

  .icon {
    flex-direction: column;
    flex-basis: 150px;
    text-align: center;
    justify-content: space-between;

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
      flex-basis: 200px;
    }
  }

  @media (min-width: 850px) {
    .icon {
      flex-basis: 25%;
    }
  }
`;
