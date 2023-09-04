/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
    name:"usersSlice",
    initialState:[],
    reducers:{
        addUser(state:any[],action){
            state.push(action.payload)
        },
        removeUser(_state,_action){},
        deleteUsers(_state,_action){}
    }


})
export default usersSlice