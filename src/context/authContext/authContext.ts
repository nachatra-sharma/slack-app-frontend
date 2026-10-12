import type { AuthUser } from "@/features/auth/types/types";
import { createContext } from "react";

export type AuthContextType = {
  user: AuthUser | null;
  access_token: string | null;
  isLoading: boolean;
};

export type AuthContextValue = {
  auth: AuthContextType;
  setAuth: React.Dispatch<React.SetStateAction<AuthContextType>>;
};

const AuthContext = createContext<AuthContextValue>({
  auth: { user: null, access_token: null, isLoading: true },
  setAuth: () => {},
});

export default AuthContext;
