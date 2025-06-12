interface ApiResponse<T = any> {
  message: string;
  user?: T;
  token?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken");
  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "An error occurred");
  }

  return data;
};

export const authAPI = {
  register: async (userData: RegisterData): Promise<ApiResponse<User>> => {
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });

    return handleResponse<ApiResponse<User>>(response);
  },

  login: async (credentials: LoginCredentials): Promise<ApiResponse<User>> => {
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    return handleResponse<ApiResponse<User>>(response);
  },

  getProfile: async (): Promise<ApiResponse<User>> => {
    console.log("profile check");
    const response = await fetch(`/api/auth/profile`, {
      method: "GET",
      headers: getAuthHeaders(),
      credentials: "include",
    });

    return handleResponse<ApiResponse<User>>(response);
  },

  logout: async (): Promise<ApiResponse> => {
    const response = await fetch(`/api/auth/logout`, {
      method: "POST",
      headers: getAuthHeaders(),
    });

    return handleResponse<ApiResponse>(response);
  },
};

export type { User, LoginCredentials, RegisterData, ApiResponse };
