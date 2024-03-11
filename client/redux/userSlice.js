import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  currentUser:null,
  loading:false,
  error:false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading = true
        },
        loginSuccess:(state,action)=>{
        state.loading = false;
        state.currentUser = action.payload;
        state.error =action.payload;
        },
        loginFailure:(state)=>{
        state.loading=false
        state.error= true;
        },
        logOut:(state)=>{
            // return initialState
            state.currentUser =null;
            state.loading = false;
            state.error = false;
        }
    }
})

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions

export default userSlice.reducer