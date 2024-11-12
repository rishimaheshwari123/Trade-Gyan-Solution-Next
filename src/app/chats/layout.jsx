import Sidebar from "../../components/profile/Sidebar";

const layout = ({children}) => {
  return (
   
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    
  );
};

export default layout;
