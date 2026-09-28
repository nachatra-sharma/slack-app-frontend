import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-gray-100">
      <Card className="max-w-lg shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Not Found</CardTitle>
          <CardDescription className="text-center">
            The page you're looking for doesn't exist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <img src="not-found.png" className="aspect-square h-auto w-full" />
            <Button
              size={"lg"}
              variant={"outline"}
              className="absolute bottom-4 left-1/2 w-1/3 -translate-x-1/2 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
