import { createContext, useContext } from "react";

export const MenuContext = createContext({
  open: false,
  setOpen: () => {},
});

export function useMenu() {
  return useContext(MenuContext);
}
