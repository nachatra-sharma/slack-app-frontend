import { useMutation } from "@tanstack/react-query";
import { createWorkspace } from "../../services/workspace";
import toast from "react-hot-toast";

export const useCreateWorkspace = () => {
  const {
    isError,
    isSuccess,
    isPending,
    mutateAsync: createWorkspaceAsync,
  } = useMutation({
    mutationFn: createWorkspace,
    onSuccess: () => {
      toast.success("Successfully created a workspace.");
    },
    onError: () => {
      toast.error("Failed while creating workspace.");
    },
  });

  return {
    isError,
    isSuccess,
    isPending,
    createWorkspaceAsync,
  };
};
