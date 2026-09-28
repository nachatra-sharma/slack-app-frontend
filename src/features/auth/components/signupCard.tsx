import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import type { signupFormData } from "../validations/validation";

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
    <Card className="h-auto w-1/3">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign up to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-7" onSubmit={onSubmit} noValidate>
          <div className="relative">
            <Input
              placeholder="Your Username"
              type="text"
              required
              value={signupForm.username}
              onChange={(e) => onChange("username", e.target.value)}
            />
            {error.username && <p className="absolute text-xs text-red-500">{error.username[0]}</p>}
          </div>
          <div className="relative">
            <Input
              placeholder="Your Email"
              type="email"
              required
              value={signupForm.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
            {error.email && <p className="absolute text-xs text-red-500">{error.email[0]}</p>}
          </div>
          <div className="relative">
            <Input
              placeholder="Password"
              type="password"
              required
              value={signupForm.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
            {error.password && <p className="absolute text-xs text-red-500">{error.password[0]}</p>}
          </div>
          <div className="relative">
            <Input
              placeholder="Confirm Password"
              type="password"
              required
              value={signupForm.confirmPassword}
              onChange={(e) => onChange("confirmPassword", e.target.value)}
            />
            {error.confirmPassword && (
              <p className="absolute text-xs text-red-500">{error.confirmPassword[0]}</p>
            )}
          </div>

          <Button disabled={isPending} type="submit" className="w-full cursor-pointer" size={"lg"}>
            Continue
          </Button>
        </form>
        <Separator className="my-4" />
        <Link to={"/signin"}>
          <p className="text-center text-sm text-gray-500">
            Already have an account ?{" "}
            <span className="cursor-pointer text-sky-800 hover:underline">Sign In</span>
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SignupCard;
