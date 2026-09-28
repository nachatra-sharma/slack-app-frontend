import { Route, Routes } from "react-router-dom";
import Signup from "./features/auth/pages/signup";
import Signin from "./features/auth/pages/signin";
import NotFound from "./pages/not-found/notFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./features/dashboard/pages/dashboard";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
