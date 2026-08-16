import { apiClient } from "./apiClient";

export const contactService = {
  submitContact: (data) => apiClient("/contact", { method: "POST", body: JSON.stringify(data) }),
};