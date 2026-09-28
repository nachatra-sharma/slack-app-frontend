import SignupCard from "@/features/auth/components/signupCard";
import useSignupForm from "../hooks/useSignupForm";

const Signup = () => {
  const { signupForm, onChange, onSubmit, error, isPending } = useSignupForm();
  return (
    <div className="bg-primary-brand flex min-h-screen min-w-screen items-center justify-center">
      <SignupCard
        signupForm={signupForm}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        isPending={isPending}
      />
    </div>
  );
};

export default Signup;
