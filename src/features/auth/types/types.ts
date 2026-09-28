export type ApiSuccess<T> = {
  success: true;
  message: string;
  data: T;
};

export type ApiError = {
  success: false;
  message: string;
  // validation errors: string[]; not-found / wrong password: string; 500s: object
  err: string[] | string | Record<string, unknown>;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type User = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
};

export type SignupUser = User & {
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AuthUser = User & {
  token: string;
};

export type SignupResponse = ApiResponse<SignupUser>;

export type SigninResponse = ApiResponse<AuthUser>;
