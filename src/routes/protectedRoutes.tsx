import { useAuth } from "@/features/auth/hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuth();
  if (auth.isLoading) {
    return <p>Loading....</p>;
  }

  if (!auth.user || !auth.access_token) return <Navigate to={"/signin"} />;

  return children;
};

export default ProtectedRoutes;
