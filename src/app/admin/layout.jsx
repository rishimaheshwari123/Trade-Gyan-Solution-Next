import PrivateRoute from "../../components/admin/auth/PrivateRoute";
import Sidebar from "../../components/admin/pages/Sidebar";

function layout({children}) {
  return (
    <PrivateRoute>
      <div className="">
        <Sidebar />
        <div className="lg:ml-24 mx-5 mt-3 ml-[100px] min-h-screen  bg-gradient-to-r from-gray-200 to-gray-400">
          {children}
        </div>
      </div>
    </PrivateRoute>
  );
}

export default layout;