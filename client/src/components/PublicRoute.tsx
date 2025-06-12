import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import type React from "react";

interface Props {
  children: React.ReactNode;
}

const PublicOnlyRoute = ({ children }: Props) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return null;
  if (user) return <Navigate to="/dashboard" replace />;
  return children;
};

export default PublicOnlyRoute;
