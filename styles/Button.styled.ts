import styled from "styled-components";
import { IStyle } from "../ts-types/styleTypes";

export const Button = styled.button<IStyle>`
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.theme1.navBgCol};
  color: ${({ theme }) => theme.theme1.navTextCol};
  font-weight: bolder;
  cursor: pointer;

  text-transform: uppercase;
  padding: 0 1em;
  height: 2.6em;
  line-height: 2.5em;
  position: relative;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.theme1.navTextCol};
  transition: color 0.3s;
  z-index: 1;
  font-size: 15px;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: ${({ theme }) => theme.theme1.navTextCol};
    height: 150px;
    width: 250px;
    border-radius: 50%;
  }

  &:hover {
    color: ${({ theme }) => theme.theme1.navBgCol};
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: all 0.3s;
  }

  &:hover:before {
    top: -30px;
    left: -30px;
  }

  &:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
`;
