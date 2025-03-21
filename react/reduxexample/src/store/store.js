import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../Feature/todoSlice'
import userSlice from '../Feature/userSlice'

export const store = configureStore({
    reducer: {
        todos: todoSlice,
        users: userSlice,
        // todos: todoSlice.reducer 
    }
})