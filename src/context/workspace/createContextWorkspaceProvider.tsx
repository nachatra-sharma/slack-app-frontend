import { useState } from "react";
import CreateWorkspace from "./createWorkspaceContext";

const CreateWorkspaceContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CreateWorkspace.Provider value={{ isOpen, setIsOpen }}>{children}</CreateWorkspace.Provider>
  );
};

export default CreateWorkspaceContextProvider;
