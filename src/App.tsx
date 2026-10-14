import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./context/appContextProvider";
import { AppRoutes } from "./routes/appRoutes";
import Modal from "./components/common/Modal";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modal />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
