import { useContext } from "react";
import { ThemeProviderContext } from "./themeContext";

export const useTheme = () => {
  return useContext(ThemeProviderContext);
};
