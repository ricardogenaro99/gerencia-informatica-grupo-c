import { Navigate } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";

export default function RestrictAuth({ children }) {
  const { user } = useGlobal();

  if (user) return <Navigate to="/" />;
  return <>{children}</>;
}
