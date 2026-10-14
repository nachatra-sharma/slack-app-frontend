import { createContext } from "react";

type CreateWorkspaceContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateWorkspace = createContext<CreateWorkspaceContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export default CreateWorkspace;
