import CreateWorkspace from "@/context/workspace/createWorkspaceContext";
import { useContext } from "react";

const useWorkspaceModal = () => {
  const { isOpen: createWorkspaceModalOpen, setIsOpen: setCreateWorkspaceModalOpen } =
    useContext(CreateWorkspace);

  return {
    createWorkspaceModalOpen,
    setCreateWorkspaceModalOpen,
  };
};

export default useWorkspaceModal;
