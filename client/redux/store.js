import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice.js"

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})

// Storage
// ---user ---currentUser,loading,error