import { ReactElement } from "react";
import { IProject, IAbout } from "./dataTypes";
import { Dispatch, SetStateAction } from "react";

export interface IProjectsProps {
  title: string;
  image: string;
  summary: string;
  tools: string;
  index: number;
  link: string;
}

interface DarkMode {
  darkMode?: boolean;
}
export interface ILayout extends DarkMode {
  children: ReactElement;
}

export interface IAllProjectsProps extends DarkMode {
  projects: IProject[];
}

export interface IHomePageProps {
  projects: IProject[];
  darkMode?: boolean;
  about: any;
  el: string;
  setEl: Dispatch<SetStateAction<string>>;
}

export interface IPaginationProps {
  number: number;
  numOfPages: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

export interface IAboutProps extends DarkMode {
  about: IAbout[];
}

export interface ISkillsProps extends DarkMode {}
export interface IHeroProps extends DarkMode {}

export interface INavProps {
  el: string;
  setEl: Dispatch<SetStateAction<string>>;
}
