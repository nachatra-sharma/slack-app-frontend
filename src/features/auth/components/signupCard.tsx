import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignupCard = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  return (
    <Card className="h-auto w-1/3">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign up to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          <Input
            placeholder="Your Username"
            disabled={false}
            type="text"
            required
            value={signupForm.username}
            onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
          />
          <Input
            placeholder="Your Email"
            disabled={false}
            type="email"
            required
            value={signupForm.email}
            onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            disabled={false}
            type="password"
            required
            value={signupForm.password}
            onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
          />
          <Input
            placeholder="Confirm Password"
            disabled={false}
            type="password"
            required
            value={signupForm.confirmPassword}
            onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
          />
          <Button disabled={false} type="submit" className="w-full cursor-pointer" size={"lg"}>
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
