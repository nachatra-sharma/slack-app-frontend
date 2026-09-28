import { useState } from "react";
import SigninCard from "../components/signinCard";

const Signin = () => {
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="bg-primary-brand flex min-h-screen min-w-screen items-center justify-center">
      <SigninCard signinForm={signinForm} setSigninForm={setSigninForm} />
    </div>
  );
};

export default Signin;
