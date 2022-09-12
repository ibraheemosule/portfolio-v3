import { Navbar } from "../styles/Navbar.styled";
import SMHandles from "./SMHandles";
import CallLogo from "../assets/svgs/CallLogo";
import FileLogo from "../assets/svgs/FileLogo";
import HomeLogo from "../assets/svgs/HomeLogo";
import SkillsLogo from "../assets/svgs/SkillsLogo";
import PersonLogo from "../assets/svgs/PersonLogo";
import LetterLogo from "../assets/svgs/Letter";
import Link from "next/link";
import { MouseEvent, useContext, useRef, useCallback } from "react";
import { Context } from "../assets/Context";
import { useRouter } from "next/router";
import { INavProps } from "../ts-types/componentTypes";

const Nav: React.FC<INavProps> = ({ setEl }) => {
  const { darkmode, toggle, setToggle, toggleIcon, setToggleIcon } =
    useContext(Context);

  const router = useRouter();

  const trueToggler = () => setToggle(true);

  const falseToggler = () => setToggle(false);

  const section = useRef<HTMLElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleNav = useCallback(() => {
    if (window.innerWidth >= 576) return;

    setToggleIcon(toggle => !toggle);

    const el = section.current!;
    el.style.display = "block";
    let li,
      time = 1;
    if (!el) return;
    let lists: Element[] | HTMLCollection[] = Array.from(el.children).map(
      val => val.children
    );
    const [a] = lists;
    lists = [...Array.from(a)];

    if (toggleIcon) {
      for (li of lists as unknown as HTMLCollectionOf<HTMLLIElement>) {
        li.style.animation = `slide-out  .2s ${0.1 * time}s ease-in 1 forwards`;
        time++;
      }
      el.style.animation = `slide-out .2s ease-in 1 .${time}s forwards`;
    } else {
      el.style.animation = "slide-in .15s ease-in 1 forwards";
      for (li of lists as unknown as HTMLCollectionOf<HTMLLIElement>) {
        li.style.animation = `slide-in 0.2s ${0.08 * time}s ease-in 1 forwards`;
        time++;
      }
    }
  }, [toggleIcon, setToggleIcon]);

  const scrollToId = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const innerText = e.currentTarget.textContent!;
    toggleNav();
    const el = document.getElementById(innerText);
    if (router.pathname === "/AllProjects") {
      setEl(innerText);
      router.push("/");
      return;
    }
    el?.scrollIntoView(true);
  };

  return (
    <Navbar
      toggle={toggle}
      onMouseEnter={trueToggler}
      onMouseLeave={falseToggler}
      onTouchStart={trueToggler}
      darkMode={darkmode}
      toggleIcon={toggleIcon}
    >
      <div className="logo">
        <LetterLogo />
      </div>
      <section ref={section} className="list">
        <ul>
          <li onClick={toggleNav}>
            <Link href="/">
              <a>
                <HomeLogo />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <button onClick={e => scrollToId(e)}>
              <PersonLogo />
              <span>About</span>
            </button>
          </li>
          <li>
            <button onClick={e => scrollToId(e)}>
              <SkillsLogo />
              <span>Skills</span>
            </button>
          </li>
          <li onClick={toggleNav}>
            <Link href="/AllProjects" scroll={false}>
              <a>
                <FileLogo />
                <span>Projects</span>
              </a>
            </Link>
          </li>
          <li>
            <button onClick={e => scrollToId(e)}>
              <CallLogo />
              <span>Contact</span>
            </button>
          </li>
        </ul>

        <SMHandles />
      </section>
      <button className="hamburger" onClick={toggleNav}>
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
      </button>
    </Navbar>
  );
};

export default Nav;
