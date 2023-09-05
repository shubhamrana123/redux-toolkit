import { createSlice } from "@reduxjs/toolkit";
import usersSlice from "./UserSlice";
import { clearAllList } from "../actions";
const adminSlice =  createSlice({
    name:"admin",
    initialState:[],
    reducers:{
        addAdminList(state:any[],action){
state.push(action.payload)
        },
        // deleteAdmin(state,action){}
      

    },
    extraReducers(builder) {
        builder.addCase(clearAllList,(state:any,action)=>{
            state.splice(0,action.payload)
        })
    },
})
export default adminSlice
export const {addAdminList} = adminSlice.actions