import UserDetails from "../../../../components/admin/pages/UserDetails";


const page = ({params}) => {
  const {id} = params;
  return <UserDetails id={id} />;
};

export default page;
