import CombineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./authContext/authContextProvider";
import { ThemeProvider } from "./theme/themeProvider";
import CreateWorkspaceContextProvider from "./workspace/createContextWorkspaceProvider";

export const AppContextProvider = CombineContext(
  AuthContextProvider,
  ThemeProvider,
  CreateWorkspaceContextProvider,
);
