import { Route, Routes } from "react-router-dom";
import Signup from "../features/auth/pages/signup";
import Signin from "../features/auth/pages/signin";
import Dashboard from "../features/dashboard/pages/dashboard";
import NotFound from "../pages/not-found/notFound";
import ProtectedRoutes from "./protectedRoutes";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      ></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};
