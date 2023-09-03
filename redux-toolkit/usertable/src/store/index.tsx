import {configureStore} from '@reduxjs/toolkit'
import usersSlice from './slices/UserSlice'
const store = configureStore({
   reducer:{
    user:usersSlice.reducer,
   }

})
console.log(usersSlice);

export default store