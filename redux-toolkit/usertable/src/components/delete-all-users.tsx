import { useDispatch, useSelector } from "react-redux"
import { deleteUsers } from "../features/slices/UserSlice"

const DeleteAllUsers = () => {

    const dispatch =  useDispatch<any>()
    const data = useSelector((state:any)=>
  {
    return state.user
  }
)
  const removeAllUsers = () =>{
dispatch(deleteUsers(data.length))
  }
  return (
    <div>

      <button style={{backgroundColor:'red',color:'white'}} onClick = {()=>removeAllUsers()}>

        Delete all users
      </button>
    </div>
  )
}

export default DeleteAllUsers