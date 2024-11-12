import SingleServiceAdmin from '../../../../components/admin/pages/SingleService'


const page = ({params}) => {
  const {id} = params
  return (
   <SingleServiceAdmin id={id}/>
  )
}

export default page
