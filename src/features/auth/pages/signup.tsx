import SignupCard from "@/features/auth/components/signupCard";
import { useState } from "react";

const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  return (
    <div className="bg-primary-brand flex min-h-screen min-w-screen items-center justify-center">
      <SignupCard signupForm={signupForm} setSignupForm={setSignupForm} />
    </div>
  );
};

export default Signup;
