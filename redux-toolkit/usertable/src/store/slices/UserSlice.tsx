/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
    name:"usersSlice",
    initialState:[],
    reducers:{
        addUser(_states,_action){},
        removeUser(_state,_action){},
        deleteUsers(_state,_action){}
    }


})
export default usersSlice