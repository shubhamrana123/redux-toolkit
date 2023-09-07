/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUserListApi =  createAsyncThunk("fetchUserListApi ",async()=>{
    const url =`https://jsonplaceholder.typicode.com/users`
    const response =  await axios.get(url)
    return response
})
const usersSlice = createSlice({
    name:"usersSlice",
    initialState:{
        isLoading:false,
        data:{},
        isError:false
    },
    reducers:{
        addUsers(state:any,action){
            state.push(action.payload)
     
            
            console.log(action.payload);
            
        },
        removeUser(state:any,action){
console.log("delete",action.payload);

state.splice(action.payload,1)

        },
        deleteUsers(state,action){
// state.splice(0,action.payload)
        }
    },extraReducers:(builders)=>{
builders.addCase(fetchUserListApi.fulfilled,(state,action)=>{
    state.isLoading = false;
    state.data= action.payload
});
builders.addCase(fetchUserListApi.pending,(state,action)=>{
    state.isLoading=true
})
builders.addCase(fetchUserListApi.rejected,(state,action)=>{
    state.isError= true
})

    }
 


})
export default usersSlice
export const {addUsers,removeUser,deleteUsers} = usersSlice.actions