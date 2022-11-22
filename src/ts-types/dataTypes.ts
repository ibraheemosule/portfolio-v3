import { Dispatch, SetStateAction } from "react";

export interface IProject {
  fields: {
    link: string;
    photo: string;
    summary: string;
    title: string;
    tool: string[];
  };
  metadata: {
    [key: string]: any;
  };
  sys: {
    id: string;
    [key: string]: any;
  };
}

export interface Paginate {
  arr: IProject[];
  pageSize: number;
  pageNumber: number;
}

export interface IAbout {
  fields: {
    about: string;
    photo: string;
    cv: {
      fields: {
        file: {
          contentType: string;
          details: { size: number };
          fileName: string;
          url: string;
        };
        title: string;
      };
    };
  };
  [key: string]: any;
}

export interface IContext {
  darkmode: boolean;
  toggleDarkmode: () => void;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggleIcon: boolean;
  setToggleIcon: Dispatch<SetStateAction<boolean>>;
}
