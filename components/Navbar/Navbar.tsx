import { Navbar } from "./Navbar.styled";
import SMHandles from "../others/SMhandles/SMHandles";
import LetterLogo from "../../assets/svgs/Letter";
import Link from "next/link";
import { MouseEvent, useContext, useRef, useCallback, useEffect } from "react";
import { Context } from "../../assets/utils/Context";
import { useRouter } from "next/router";
import { INavProps } from "../../ts-types/componentTypes";
import navList from "../../assets/utils/navList";

const menuIconClass = ["first", "second", "third"];

const Nav: React.FC<INavProps> = ({ setEl }) => {
  const { darkmode, toggle, setToggle, toggleIcon, setToggleIcon } =
    useContext(Context);

  const router = useRouter();

  const trueToggler = () => setToggle(true);

  const falseToggler = () => setToggle(false);

  const section = useRef<HTMLElement>(null);

  const removeTransform = useCallback(() => {
    setToggleIcon(false);
    const el = section.current!;
    let li;
    let lists: Element[] | HTMLCollection[] = Array.from(el.children).map(
      val => val.children
    );
    const [a] = lists;
    lists = [...Array.from(a)];

    for (li of lists as unknown as HTMLCollectionOf<HTMLLIElement>) {
      li.removeAttribute("style");
    }
    el.removeAttribute("style");
  }, [setToggleIcon]);

  useEffect(() => {
    window.addEventListener("resize", removeTransform);

    return () => window.removeEventListener("resize", removeTransform);
  }, [removeTransform]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleNav = useCallback(() => {
    if (window.innerWidth >= 576) return;

    setToggleIcon(toggle => !toggle);

    const el = section.current!;

    let li,
      time = 1;
    // if (!el) return;
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
    console.log(innerText);
    const el = document.getElementById(innerText);
    if (router.pathname === "/Projects") {
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
          {navList.map(({ href, Icon, name }) => {
            return (
              <li key={name}>
                <button onClick={href ? toggleNav : e => scrollToId(e)}>
                  {href ? (
                    <Link href={href} scroll={name === "Projects" && false}>
                      <a>
                        <Icon />
                        <span>{name}</span>
                      </a>
                    </Link>
                  ) : (
                    <Icon />
                  )}
                  {!href ? <span>{name}</span> : ""}
                </button>
              </li>
            );
          })}
        </ul>
        <SMHandles />
      </section>

      <button className="hamburger" onClick={toggleNav}>
        {menuIconClass.map(val => (
          <span className={val} key={val}></span>
        ))}
      </button>
    </Navbar>
  );
};

export default Nav;
