import { LayoutStyle } from "../styles/LayoutStyle.styled";
import Nav from "./Navbar";
import { ILayout } from "../ts-types/componentTypes";

import { useContext, useState, cloneElement } from "react";
import { Context } from "../assets/utils/Context";
import BgAnimation from "./BgAnimation";

const Layout: React.FC<ILayout> = ({ children }) => {
  const { darkmode, toggleDarkmode } = useContext(Context);
  const [el, setEl] = useState<string>("");
  return (
    <LayoutStyle darkMode={darkmode}>
      <button className="darkmode" onClick={() => toggleDarkmode()}>
        <span className="light">Light</span>
        <span className="dark">Dark</span>
      </button>
      <Nav el={el} setEl={setEl} />
      <div>{cloneElement(children, { el, setEl })}</div>
      <BgAnimation />
    </LayoutStyle>
  );
};

export default Layout;
