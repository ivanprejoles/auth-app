import { authAPI } from "@/services/api";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await authAPI.getProfile();
        setUser(response.user || null);
      } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log("Attempting login with:", { email });

      const response = await authAPI.login({ email, password });

      if (response.user) {
        setUser(response.user);

        toast("Login Successful", {
          description: `Welcome back, ${response.user.name}!`,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login Failed", {
        description:
          error instanceof Error
            ? error.message
            : "Login failed. Please try again.",
      });
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      console.log("Attempting registration with:", { name, email });

      const response = await authAPI.register({ name, email, password });

      if (response.user) {
        setUser(response.user);

        toast("Registration Successful", {
          description: `Welcome to the app, ${name}!`,
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration Failed", {
        description:
          error instanceof Error
            ? error.message
            : "Registration failed. Please try again.",
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      setUser(null);

      toast("Logged Out", {
        description: "You have been successfully logged out.",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
