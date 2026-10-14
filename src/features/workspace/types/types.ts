export type WorkspaceChannel = {
  name: string;
  workspaceId: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type WorkspaceMember = {
  memberId: string;
  role: "admin" | "member";
  _id: string;
};

export type Workspace = {
  _id: string;
  name: string;
  joinCode: string;
  channels: WorkspaceChannel[];
  members: WorkspaceMember[];
  __v: number;
};

export type CreateWorkspaceResponse = {
  success: boolean;
  message: string;
  data: Workspace;
  err: Record<string, never>;
};

export type WorkspaceUser = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
};

export type FetchedWorkspace = {
  _id: string;
  name: string;
  joinCode: string;
  channels: string[];
  members: WorkspaceMember[];
  __v: number;
};

export type GetWorkspacesResponse = {
  success: boolean;
  message: string;
  data: FetchedWorkspace[];
  err: Record<string, never>;
};
