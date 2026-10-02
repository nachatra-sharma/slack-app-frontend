import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { signupFormData } from "../validations/validation";
import AnotherServices from "./common/anotherServices";

const SignupCard = ({
  signupForm,
  onChange,
  onSubmit,
  error,
  isPending,
}: {
  signupForm: signupFormData;
  onChange: (field: keyof signupFormData, value: string) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  error: Partial<Record<keyof signupFormData, string[]>>;
  isPending: boolean;
}) => {
  return (
    <Card className="mx-auto w-[30%] rounded-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up to Continue</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Sign up to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-7" onSubmit={onSubmit} noValidate>
          <div className="relative">
            <Input
              placeholder="Your Username"
              className="py-4"
              type="text"
              required
              value={signupForm.username}
              onChange={(e) => onChange("username", e.target.value)}
            />
            {error.username && (
              <p className="absolute -bottom-5 text-xs text-red-500">{error.username[0]}</p>
            )}
          </div>
          <div className="relative">
            <Input
              placeholder="Your Email"
              className="py-4"
              type="email"
              required
              value={signupForm.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
            {error.email && (
              <p className="absolute -bottom-5 text-xs text-red-500">{error.email[0]}</p>
            )}
          </div>
          <div className="relative">
            <Input
              placeholder="Password"
              className="py-4"
              type="password"
              required
              value={signupForm.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
            {error.password && (
              <p className="absolute -bottom-5 text-xs text-red-500">{error.password[0]}</p>
            )}
          </div>
          <div className="relative">
            <Input
              placeholder="Confirm Password"
              className="py-4"
              type="password"
              required
              value={signupForm.confirmPassword}
              onChange={(e) => onChange("confirmPassword", e.target.value)}
            />
            {error.confirmPassword && (
              <p className="absolute -bottom-5 text-xs text-red-500">{error.confirmPassword[0]}</p>
            )}
          </div>

          <Button disabled={isPending} type="submit" className="w-full cursor-pointer" size={"lg"}>
            Continue
          </Button>
        </form>
        <AnotherServices message="Already have an account ?" route="/signin" />
      </CardContent>
    </Card>
  );
};

export default SignupCard;
