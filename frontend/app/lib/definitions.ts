export type Client = {
  id: number;
  username: string;
  email: string;
  password: string;
  active: boolean;
  createdAt: string;
  // below are optional fields
  avatar: string;
  updatedAt: string;
  deletedAt: string;
};
