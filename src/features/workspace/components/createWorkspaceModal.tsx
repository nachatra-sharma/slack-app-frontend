import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useWorkspaceModal from "../hooks/useWorkspaceModal";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCreateWorkspace } from "../hooks/apis/useCreateWorkspace";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CreateWorkspaceModal = () => {
  const { createWorkspaceModalOpen, setCreateWorkspaceModalOpen } = useWorkspaceModal();
  const [workspaceName, setWorkspaceName] = useState("");
  const { isPending, createWorkspaceAsync } = useCreateWorkspace();
  const navigate = useNavigate();

  const handleCreateWorkspace = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const data = await createWorkspaceAsync({ name: workspaceName, description: "" });
      navigate(`/workspaces/${data.data._id}`);
    } catch (error) {
      console.log("Not able to create workspace", error);
    } finally {
      setWorkspaceName("");
      setCreateWorkspaceModalOpen(false);
    }
  };

  const handleClose = () => {
    setCreateWorkspaceModalOpen(false);
  };

  return (
    <Dialog open={createWorkspaceModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace.</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleCreateWorkspace}>
          <Input
            required
            minLength={3}
            placeholder="Enter your workspace name e.g. MyWorkspace, DevWorkspace etc"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />
          <div className="mt-5 flex justify-end">
            <Button disabled={isPending} type="submit">
              Create Workspace
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceModal;
