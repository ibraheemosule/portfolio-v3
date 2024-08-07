import GithubIcon from "../assets/svgs/GithubIcon";
import TwitterLogo from "../assets/svgs/TwitterLogo";
import LinkedinLogo from "../assets/svgs/LinkedinLogo";
import EmailLogo from "../assets/svgs/EmailLogo";
import FacebookLogo from "../assets/svgs/FacebookLogo";
import { useContext } from "react";
import { SMHandlesStyle } from "../styles/SMHandlesStyle.styled";
import { Context } from "../assets/utils/Context";

const SMHandles = () => {
  const { darkmode } = useContext(Context);
  return (
    <SMHandlesStyle darkMode={darkmode}>
      <li>
        <a
          href="https://github.com/ibraheemsulay"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ibrahimsule"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo />
        </a>
      </li>
      <li>
        <a
          href="mailto:ibraheemsulay@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <EmailLogo />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/ibraheemsulay"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/ibraheemsulay/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookLogo />
        </a>
      </li>
    </SMHandlesStyle>
  );
};

export default SMHandles;
