import { useSelector } from "react-redux"


const AdminList = () => {
    const data = useSelector((state:any)=>state.admin)
  return (
<>
{data?.map((adminList:any)=>(
    <div style={{
        color:'blue'
    }}>
        {adminList}
    </div>
))}
</>
  )
}

export default AdminList