import * as z from "zod";

export const signupFormSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(1, { error: "Username is required" })
      .min(5, {
        error: "Username must be at least 5 characters",
      })
      .max(10, {
        error: "Username must be at most 10 characters",
      }),
    email: z
      .string()
      .trim()
      .min(1, { error: "Email is required" })
      .pipe(z.email({ error: "Enter a valid email address" })),
    password: z
      .string()
      .min(1, { error: "Password is required" })
      .min(7, { error: "Password must be at least 7 characters" })
      .max(14, { error: "Password must be at most 14 characters" }),
    confirmPassword: z.string().min(1, { error: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password doesn't match",
    path: ["confirmPassword"],
  });

export type signupFormData = z.infer<typeof signupFormSchema>;

export const loginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { error: "Email is required" })
    .pipe(
      z.email({
        error: "Enter a valid email address",
      }),
    ),
  password: z
    .string()
    .min(1, { error: "Password is required" })
    .min(7, { error: "Password must be at least 7 characters" })
    .max(14, { error: "Password must be at most 14 characters" }),
});

export type loginFormData = z.infer<typeof loginFormSchema>;
