import { createContext } from "react";
import { Props } from "./type";


export const Context = createContext<Props>({
  id: "",
  title: "",
  keywords: [""],
  placeholder: "",
  tip: "",
  onAdd: () => {},
  onDelete: () => {},
  disabled: false,
  background: "",
  border: "",
});