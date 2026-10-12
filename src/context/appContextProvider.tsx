import CombineContext from "@/utils/combineContext";
import { AuthContextProvider } from "./authContext/authContextProvider";

export const AppContextProvider = CombineContext(AuthContextProvider);
