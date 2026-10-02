import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { loginFormData } from "../validations/validation";
import AnotherServices from "./common/anotherServices";

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
    <Card className="mx-auto w-[30%] rounded-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login to continue</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-7" onSubmit={onSubmit} noValidate>
          <div className="relative">
            <Input
              className="py-4"
              placeholder="Email"
              type="email"
              disabled={false}
              required
              value={signinForm.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
            {error.email && (
              <p className="absolute -bottom-5 text-xs text-red-500">{error.email[0]}</p>
            )}
          </div>
          <div className="relative">
            <Input
              className="py-4"
              placeholder="Password"
              type="password"
              disabled={false}
              required
              value={signinForm.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
            {error.password && (
              <p className="absolute -bottom-5 text-xs text-red-500">{error.password[0]}</p>
            )}
          </div>
          <Button type="submit" disabled={isPending} className="w-full cursor-pointer py-5">
            Continue
          </Button>
        </form>
        <AnotherServices message="Don't have an account ?" route={"/signup"} />
      </CardContent>
    </Card>
  );
};

export default SigninCard;
