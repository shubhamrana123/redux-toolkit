import {configureStore} from '@reduxjs/toolkit'
import usersSlice from '../features/slices/UserSlice'
import adminSlice from '../features/slices/AdminSlice';
const store = configureStore({
   reducer:{
    user:usersSlice.reducer,
    admin:adminSlice.reducer
   }

})
console.log(usersSlice);

export default store