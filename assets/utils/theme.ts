const defaultTheme = {
  theme1: {
    navTextCol: "hsla(207, 69%, 97%, 0.488)",
    navHoverCol: " hsla(207, 69%, 97%, 0.888)",
    navBgCol: "hsla(232, 72%, 22%, 1)",
    bgCol: "hsla(207, 56%, 91%, 0.5)",
    textCol: "hsla(232, 72%, 22%, 0.859)",
    aboutBgCol: "hsla(210, 83%, 98%, 1)",
    lineCol: "hsla(230, 17%, 67%, 1)",
    titleCol: "hsl(233, 71%, 22%)",
  },
  theme2: {
    navTextCol: "rgb(228, 240, 255);",
    navHoverCol: "rgba(228, 240, 255, 0.8);",
    navBgCol: "rgb(22, 26, 37);",
    bgCol: "#202737",
    textCol: "rgba(211, 211, 211, 0.8)",
    aboutBgCol: "rgba(44,52,71,1)",
    lineCol: "hsla(230, 17%, 67%, 0.8)",
    titleCol: "rgba(211, 211, 211)",
  },
};

export type ThemeType = typeof defaultTheme;
export default defaultTheme;
