import { SpinnerCustom } from "@/components/ui/spinner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuth();

  if (auth.isLoading) {
    return (
      <div className="flex min-h-screen min-w-screen items-center justify-center">
        <SpinnerCustom />
      </div>
    );
  }

  if (!auth.user || !auth.access_token) return <Navigate to={"/signin"} />;

  return children;
};

export default ProtectedRoutes;
