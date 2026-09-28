import { Route, Routes } from "react-router-dom";
import Signup from "./features/auth/pages/signup";
import Signin from "./features/auth/pages/signin";
import NotFound from "./pages/not-found/notFound";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
