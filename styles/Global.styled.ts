import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface GlobalProps {
  theme: ThemeType;
  darkMode: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none; 
}
*::-webkit-scrollbar { width: 0 !important }

body {
    width: 100vw;
    max-width: 1500px;
    margin: auto;
    overflow-x: hidden;
    font-size: 16px;
}

h1,
  h2,
  h3
   {
    text-transform: capitalize;
    font-size: 2.5rem;
    transition: color .3s ease-in;

    @media (min-width: 576px) {
      font-size: 3.5rem;
    }
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
    @media (min-width: 992px) {
      font-size: 4rem;
    }
    @media (min-width: 1200px) {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 992px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
    }

    &::after {
      content: "";
      display: block;
      width: 40%;
      margin: auto;
      margin-top: 5px;
      height: 5px;
      border-radius: 100%;
      background: linear-gradient(to right, ${({ theme }) =>
        theme.theme1.lineCol}, ${({ theme }) => theme.theme1.navBgCol});
      }
  }

  h4 {
    font-size: 1.2rem;
    text-transform: capitalize;

    @media (min-width: 576px) {
      font-size: 1.3rem;
    }
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    @media (min-width: 992px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${({ darkMode }) =>
      darkMode ? "rgba(255, 255, 255, 0.868)" : "rgba(0, 0, 0, 0.868)"};

    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }

  .skills {
    display: flex;
    padding: 0 -15px;
    width: 100%;
    margin-top: 0;
  }
`;

export default GlobalStyle;
