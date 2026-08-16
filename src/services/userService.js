import { apiClient } from "./apiClient";

export const userService = {
  getUsers: () => apiClient("/users"),
  createUser: (data) => apiClient("/users", { method: "POST", body: JSON.stringify(data) }),
  deleteUser: (id) => apiClient(`/users/${id}`, { method: "DELETE" }),
};