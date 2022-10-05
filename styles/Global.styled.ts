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
    font-size: 16px;
    background: ${({ theme, darkMode }) =>
      darkMode ? theme.theme2.bgCol : theme.theme1.bgCol};
}

h1, h2, h3, h4 {
    text-transform: capitalize;
    font-size: 2.5rem;
    transition: color .3s ease-in;
  }

  h3 {
    font-size: 1.5rem;

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
  }

  p {
    font-size: 1rem;
    color: ${({ darkMode }) =>
      darkMode ? "rgba(255, 255, 255, 0.868)" : "rgba(0, 0, 0, 0.868)"};

  }

  .skills {
    display: flex;
    width: 100%;
    margin-top: 0;
  }

  @keyframes slide-in {
    from {
      transform: translate(-100%, -100%);

    }

    to {
      transform: translate(0%, 0%);

    }
  }

  @keyframes slide-out {
    from {
      transform: translate(0%, 0%);

    }

    to {
      transform: translate(-100%, -100%);

    }
  }

  @media (min-width: 576px){
    h1, h3 {
      font-size: 2rem;
    }

  h4 {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 768px) {
    h1 {
    font-size: 2.5rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 992px) {
    h1 {
    font-size: 4rem;
    }

    h3 {
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    p {
    font-size: 1.2rem;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 5rem;
    }

    h3 {
      font-size: 3rem;
    }
    
    h4 {
      font-size: 1.5rem;
    }
}
`;

export default GlobalStyle;
