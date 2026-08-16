const BASE_URL = import.meta.env?.VITE_API_URL 
  || process.env.REACT_APP_API_URL 
  || "https://portfolio-backend-7x66.onrender.com/api";

export const apiClient = async (endpoint, options = {}) => {
  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};