import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/auth";

export const useSignUp = () => {
  const {
    isPending,
    isSuccess,
    error,
    isError,
    mutate: signupMutation,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log("User created successfully: ", data);
    },
    onError: (error) => {
      console.log("Something went wrong while creating user: ", error);
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
