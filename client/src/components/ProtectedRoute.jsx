import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CareerCopilotModal from "./CareerCopilotModal";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Outlet />
      <CareerCopilotModal />
    </>
  );
};

export default ProtectedRoute;
