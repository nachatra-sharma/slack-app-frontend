import { useWorkspace } from "@/features/workspace/hooks/apis/useWorkspace";
import { useEffect } from "react";

const Dashboard = () => {
  const { workspace, isFetching } = useWorkspace();

  useEffect(() => {
    if (isFetching) return;
    if (workspace && workspace.data && workspace.data.length === 0) {
      console.log("No Workspaces found creating one");
    }
  }, [workspace, isFetching]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
