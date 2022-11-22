import styled from "styled-components";
import { ISMHandlesStyle } from "../../ts-types/styleTypes";

export const SMHandlesStyle = styled.ul<ISMHandlesStyle>`
  list-style-type: none;
  padding-inline-start: 0;
  display: flex;

  li {
    display: flex;
    justify-content: center;
    a {
      color: ${({ theme, darkMode }) =>
        darkMode ? theme.theme2.navTextCol : theme.theme1.navTextCol};
      text-decoration: none;
      display: flex;
      padding: 10px 5px;
      text-align: center;
      cursor: pointer;
      margin-left: 5px;
      margin-right: 5px;
      align-items: center;
      font-size: small;

      &:hover {
        color: ${({ theme }) => theme.theme1.navHoverCol};
      }

      span {
        font-size: inherit;
        transition: all 0.3s ease-in;
      }
    }

    svg {
      height: auto;
      width: 25px;
      fill: hsla(207, 69%, 97%, 0.488);
      transition: all 0.3s ease-in;
    }

    &:hover {
      background: transparent;

      svg {
        fill: ${({ theme }) => theme.theme1.navHoverCol};
      }
    }
  }

  @media (min-width: 576px) {
    display: block;
  }
`;
