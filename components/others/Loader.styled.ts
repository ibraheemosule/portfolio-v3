import styled from "styled-components";
import { IStyle } from "../../ts-types/styleTypes";

export const Loader = styled.button<IStyle>`
  border: 5px solid yellow;
  border-radius: 50%;
  border-top: 5px solid blue;
  border-bottom: 5px solid blue;
  background: transparent;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
