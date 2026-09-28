import axios from "@/config/axios.config";
import { isAxiosError } from "axios";
import type { SigninResponse, SignupResponse } from "../types/types";

export const createUser = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): Promise<SignupResponse> => {
  try {
    const response = await axios.post("/users/signup", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("error while creating user: ", error);
    if (isAxiosError(error) && error.response) {
      throw error.response.data;
    }
    throw error;
  }
};

export const userSignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<SigninResponse> => {
  try {
    const response = await axios.post("/users/signin", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("error while user log in", error);
    if (isAxiosError(error) && error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
