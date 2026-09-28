import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import type { SigninFormType } from "../types/types";

const SigninCard = ({
  signinForm,
  setSigninForm,
}: {
  signinForm: SigninFormType;
  setSigninForm: React.Dispatch<React.SetStateAction<SigninFormType>>;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          <Input
            placeholder="Your Email"
            type="email"
            disabled={false}
            required
            value={signinForm.email}
            onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
          />
          <Input
            placeholder="Your Password"
            type="password"
            disabled={false}
            required
            value={signinForm.password}
            onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
          />
          <Button type="submit" className="w-full cursor-pointer">
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
