import axios from "@/config/axios.config";
import { isAxiosError } from "axios";
import type { CreateWorkspaceResponse, GetWorkspacesResponse } from "../types/types";

export const createWorkspace = async ({
  name,
  description,
}: {
  name: string;
  description: string;
}): Promise<CreateWorkspaceResponse> => {
  try {
    const response = await axios.post(
      "/workspaces",
      {
        name,
        description,
      },
      {
        skipAuthRedirect: false,
      },
    );
    return response.data;
  } catch (error) {
    console.log("Error while creating workspace.");
    if (isAxiosError(error) && error.response) throw error.response.data;
    throw error;
  }
};

export const fetchWorkspace = async (): Promise<GetWorkspacesResponse> => {
  try {
    const response = await axios.get(`/workspaces`, {
      skipAuthRedirect: false,
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
    throw error;
  }
};
