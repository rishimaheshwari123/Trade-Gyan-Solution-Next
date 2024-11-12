"use client";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";

function PrivateRoute({children}) {
  const router = useRouter();
  const {token, user} = useSelector((state) => state.auth);

  if (!token) {
    return router.push("/client-login");
    // <Navigate to="/client-login" />;
  }

  if (user?.role !== "Admin") {
    return router.push("/");
    // <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
