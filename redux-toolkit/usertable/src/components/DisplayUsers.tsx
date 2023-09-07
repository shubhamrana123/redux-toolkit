import { useSelector ,useDispatch} from "react-redux"
import './displayUsers.css'
// import { styled } from "styled-components"
import { removeUser } from "../features/slices/UserSlice"
// import {MdDeleteForever} from "react-icons/all.js"

// import MdDeleteForever
const DisplayUsers = () => {
    const dispatch =  useDispatch<any>()
    const {data} = useSelector((state:any)=>state?.user?.data)
    console.log(data);
    const deleteUser = (id:any) =>{
dispatch(removeUser(id))
    }
  return (
    <>
    <div>{data?.name}</div>
    {/* {data?.map((user:any,id:any)=>(
        <div className="listing">

<div>{user}</div>
        <button className="btn btn-delete" onClick={()=>deleteUser(id)}>
   delete
        </button>
        </div>
     
    ))} */}
    
    </>
  )
}

export default DisplayUsers