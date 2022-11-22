import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../assets/utils/theme";
import GlobalStyle from "../components/others/Global.styled";
import Layout from "../components/Layout/Layout";
import { Context } from "../assets/utils/Context";
import { useState, useEffect } from "react";

interface CustomAppProps extends AppProps {}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const [darkmode, setDarkmode] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  useEffect(() => {
    let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (matched) setDarkmode(() => !darkmode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkmode = () => setDarkmode(val => !val);
  return (
    <ThemeProvider theme={theme}>
      <Context.Provider
        value={{
          darkmode,
          toggleDarkmode,
          toggle,
          setToggle,
          toggleIcon,
          setToggleIcon,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle darkMode={darkmode} />
      </Context.Provider>
    </ThemeProvider>
  );
};

export default MyApp;
