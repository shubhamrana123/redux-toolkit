import { useDispatch, useSelector } from "react-redux"
import { deleteUsers } from "../../features/slices/UserSlice"
import { clearAllList } from "../../store/actions"

const ClearAdminList = () =>{
    const adminList= useSelector((state:any)=>state.admin)
    const dispatch = useDispatch<any>()
    const removeAllAdmins = () =>{
// dispatch(deleteUsers(adminList.length))
dispatch(clearAllList(adminList.length))
// dispatch(adminList.length)
    }
    return(
        <>
        <div>
            <button style={{
                backgroundColor:'green',
                color:"white"
            }} onClick={removeAllAdmins}>Clear admin list</button>
        </div>
        </>
    )
}
export default ClearAdminList