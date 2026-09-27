import axios from "@/config/axios.config";
import { isAxiosError } from "axios";

export const createUser = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
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
  }
};

export const userSignIn = async ({ email, password }: { email: string; password: string }) => {
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
  }
};
