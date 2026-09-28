import { useState } from "react";
import { loginFormSchema, type loginFormData } from "../validations/validation";
import { useSignIn } from "./apis/useSignIn";
import z from "zod";

const useSigninForm = () => {
  const [signinForm, setSigninForm] = useState<loginFormData>({
    email: "",
    password: "",
  });
  const { isPending, signinMutation } = useSignIn();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<Partial<Record<keyof loginFormData, string[]>>>({});

  const validate = (form: loginFormData) => {
    const result = loginFormSchema.safeParse(form);
    setError(result.success ? {} : z.flattenError(result.error).fieldErrors);
    return result;
  };

  const onChange = (field: keyof loginFormData, value: string) => {
    const nextForm = { ...signinForm, [field]: value };
    setSigninForm(nextForm);
    if (hasSubmitted) {
      validate(nextForm);
    }
  };

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);
    const result = validate(signinForm);
    if (!result.success) {
      return;
    }
    const { email, password } = result.data;
    await signinMutation({ email, password });
  };

  return {
    signinForm,
    onChange,
    onSubmit,
    error,
    isPending,
  };
};

export default useSigninForm;
