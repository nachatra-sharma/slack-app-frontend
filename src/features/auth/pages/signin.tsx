import SigninCard from "../components/signinCard";
import useSigninForm from "../hooks/useSigninForm";

const Signin = () => {
  const { error, onSubmit, onChange, isPending, signinForm } = useSigninForm();
  return (
    <div className="bg-primary-brand flex min-h-screen min-w-screen items-center justify-center">
      <SigninCard
        error={error}
        onSubmit={onSubmit}
        onChange={onChange}
        isPending={isPending}
        signinForm={signinForm}
      />
    </div>
  );
};

export default Signin;
