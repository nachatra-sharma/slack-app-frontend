import { useState } from "react";
import { useSignUp } from "./apis/useSignUp";
import { signupFormSchema, type signupFormData } from "../validations/validation";
import z from "zod";

type signupError = Partial<Record<keyof signupFormData, string[]>>;

const useSignupForm = () => {
  const [signupForm, setSignupForm] = useState<signupFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [error, setError] = useState<signupError>({});

  const { isPending, signupMutation } = useSignUp();

  const validate = (form: signupFormData) => {
    const result = signupFormSchema.safeParse(form);
    setError(result.success ? {} : z.flattenError(result.error).fieldErrors);
    return result;
  };

  const onChange = (field: keyof signupFormData, value: string) => {
    const nextForm = { ...signupForm, [field]: value };
    setSignupForm(nextForm);
    if (hasSubmitted) {
      validate(nextForm);
    }
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);
    const result = validate(signupForm);
    if (!result.success) {
      return;
    }
    const { email, username, password } = result.data;
    signupMutation({ email, password, username });
  };

  return {
    signupForm,
    onChange,
    onSubmit,
    error,
    isPending,
  };
};

export default useSignupForm;
