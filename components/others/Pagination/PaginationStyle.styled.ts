import styled from "styled-components";
import { Container } from "../../others/Container.styled";

export const PaginationStyle = styled(Container)`

    z-index: 1;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    color: ${({ darkMode }) =>
      darkMode ? "rgba(255, 255, 255, 0.868)" : "rgba(0, 0, 0, 0.868)"};

    button {
      margin-right: 10px;
      margin-left: 10px;
      border: none;
      outline: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      color: ${({ darkMode }) =>
        darkMode ? "rgba(255, 255, 255, 0.868)" : "rgba(0, 0, 0, 0.868)"};
      transition: all 0.2s ease-in;

      &:hover {
        color: rgba(128, 128, 128, 0.733);
      }

      &:disabled {
        color: rgba(128, 128, 128, 0.253);
        cursor: not-allowed;
      }
    }

    span {
      border: 2px solid ${({ darkMode }) =>
        darkMode ? "rgba(255, 255, 255, 0.868)" : "rgba(0, 0, 0, 0.868)"};;
      border-radius: 5px;
      padding: 0.2rem 0.6rem;
    }
  }
`;
