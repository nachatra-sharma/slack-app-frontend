import type React from "react";
import AuthContext, { type AuthContextType } from "./authContext";
import { useState } from "react";

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthContextType>(() => {
    const accessToken = localStorage.getItem("access_token");
    const storedUser = localStorage.getItem("user");
    if (accessToken && storedUser) {
      try {
        const user = JSON.parse(storedUser);
        return {
          user,
          access_token: accessToken,
          isLoading: false,
        };
      } catch {
        return {
          user: null,
          access_token: null,
          isLoading: false,
        };
      }
    } else {
      return {
        user: null,
        access_token: null,
        isLoading: false,
      };
    }
  });

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
