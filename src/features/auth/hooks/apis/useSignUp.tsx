import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    isPending,
    isSuccess,
    error,
    isError,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      if (data.success) {
        toast.success("User created successfully");
        navigate("/signin");
      } else {
        toast.error(data.message);
      }
    },
    onError: () => {
      toast.error("Something went wrong. Please try again later.");
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    isError,
    signupMutation,
  };
};
