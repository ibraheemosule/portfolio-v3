import CallLogo from "../svgs/CallLogo";
import FileLogo from "../svgs/FileLogo";
import HomeLogo from "../svgs/HomeLogo";
import SkillsLogo from "../svgs/SkillsLogo";
import PersonLogo from "../svgs/PersonLogo";

const navList = [
  {
    href: "/",
    Icon: HomeLogo,
    name: "Home",
  },
  {
    Icon: PersonLogo,
    name: "About",
  },
  {
    Icon: SkillsLogo,
    name: "Skills",
  },
  {
    href: "/AllProjects",
    Icon: FileLogo,
    name: "Projects",
  },
  {
    Icon: CallLogo,
    name: "Contact",
  },
];

export default navList;
