import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import CurrentUser from "../contexts/CurrentUserContext";

function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  const { isLoggedIn } = useContext(CurrentUser);

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} replace />;
  }
  if (!anonymous && isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
