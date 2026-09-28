import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import type { loginFormData } from "../validations/validation";

const SigninCard = ({
  error,
  onSubmit,
  onChange,
  isPending,
  signinForm,
}: {
  error: Partial<Record<keyof loginFormData, string[]>>;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  onChange: (field: "email" | "password", value: string) => void;
  isPending: boolean;
  signinForm: loginFormData;
}) => {
  return (
    <Card className="w-1/3">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-7" onSubmit={onSubmit} noValidate>
          <div className="relative">
            <Input
              placeholder="Your Email"
              type="email"
              disabled={false}
              required
              value={signinForm.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
            {error.email && <p className="absolute text-xs text-red-500">{error.email[0]}</p>}
          </div>
          <div className="relative">
            <Input
              placeholder="Your Password"
              type="password"
              disabled={false}
              required
              value={signinForm.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
            {error.password && <p className="absolute text-xs text-red-500">{error.password[0]}</p>}
          </div>
          <Button type="submit" disabled={isPending} className="w-full cursor-pointer">
            Continue
          </Button>
        </form>
        <Separator className="my-4" />
        <p className="text-center text-sm text-gray-500">
          Don't have an account ?{" "}
          <Link to={"/signup"}>
            <span className="cursor-pointer text-sky-800 hover:underline">Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SigninCard;
