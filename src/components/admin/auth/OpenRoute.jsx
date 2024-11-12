"use client";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";

function OpenRoute({children}) {
  const {token, user} = useSelector((state) => state.auth);
  const router = useRouter();
  if (!token) {
    return children;
  }

  if (user?.role === "Admin") {
    return router.push("/admin/dashboard");
  }

  return router.push("/");
}

export default OpenRoute;
