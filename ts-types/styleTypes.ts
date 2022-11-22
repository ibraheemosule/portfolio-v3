import { ThemeType } from "../assets/utils/theme";

export interface IStyle {
  theme: ThemeType;
  darkMode?: boolean;
}

export interface IProjectsStyle extends IStyle {
  i?: number;
}

export interface INavbarStyle extends IStyle {
  toggle: boolean;
  toggleIcon: boolean;
}

export interface ISMHandlesStyle extends IStyle {}

export type Event =
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.MouseEvent<HTMLElement, MouseEvent>;
