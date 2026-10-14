import { useQuery } from "@tanstack/react-query";
import { fetchWorkspace } from "../../services/workspace";
import { QueryKeys } from "@/constants/queryKey";

export const useWorkspace = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    isFetching,
    data: workspace,
  } = useQuery({
    queryKey: [QueryKeys.GETWORKSPACES],
    queryFn: () => fetchWorkspace(),
    staleTime: 30000,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    isFetching,
    workspace,
  };
};
