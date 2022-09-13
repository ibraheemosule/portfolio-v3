import { createContext } from "react";
import { IContext } from "../../ts-types/dataTypes";

export const Context = createContext<IContext>(null!);
