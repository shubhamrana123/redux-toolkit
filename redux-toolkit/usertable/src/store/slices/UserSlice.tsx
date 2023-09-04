/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
    name:"usersSlice",
    initialState:[],
    reducers:{
        addUsers(state:any[],action){
            state.push(action.payload)
     
            
            console.log(action.payload);
            
        },
        removeUser(state:any,action){
console.log("delete",action.payload);
// state.pop(action.payload)
state.splice(action.payload,1)

        },
        deleteUsers(state,action){
state.splice(0,action.payload)
        }
    }


})
export default usersSlice
export const {addUsers,removeUser,deleteUsers} = usersSlice.actions