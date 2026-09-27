import { useMutation } from "@tanstack/react-query";
import { userSignIn } from "../../services/auth";

export const useSignIn = () => {
  const {
    isPending,
    isError,
    error,
    isSuccess,
    mutate: signinMutation,
  } = useMutation({
    mutationFn: userSignIn,
    onSuccess: (data) => {
      console.log("user signup successfully: ", data);
    },
    onError: (error) => {
      console.log("something went wrong while user trying to logged in: ", error);
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
