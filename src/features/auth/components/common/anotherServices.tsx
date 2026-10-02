import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

const AnotherServices = ({ message, route }: { message: string; route: "/signup" | "/signin" }) => {
  return (
    <>
      <Separator className="my-4" />
      <div className="flex flex-col gap-3">
        <div className="relative w-full">
          <FcGoogle className="absolute top-2 left-3" size={24} />
          <Button className="w-full cursor-pointer py-5" variant="outline">
            Continue with Google
          </Button>
        </div>
        <div className="relative w-full">
          <ImGithub className="absolute top-2 left-3" size={24} />
          <Button className="w-full cursor-pointer py-5" variant="outline">
            Continue with Github
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <p className="text-xs text-gray-500">
        {message + " "}
        <Link to={route}>
          <span className="cursor-pointer text-sky-800 hover:underline">
            {route === "/signup" ? "Sign Up" : "Sign In"}
          </span>
        </Link>
      </p>
    </>
  );
};

export default AnotherServices;
