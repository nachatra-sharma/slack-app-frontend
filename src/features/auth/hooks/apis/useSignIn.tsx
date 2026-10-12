import { useMutation } from "@tanstack/react-query";
import { userSignIn } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../useAuth";

export const useSignIn = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    isPending,
    isError,
    error,
    isSuccess,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: userSignIn,
    onSuccess: (data) => {
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("access_token", data.data.token);
        setAuth({
          user: data.data,
          access_token: data.data.token,
          isLoading: false,
        });
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    },
    onError: () => {
      toast.error("Please check your credentials and try again.");
    },
  });

  return {
    isPending,
    isError,
    error,
    isSuccess,
    signinMutation,
  };
};
