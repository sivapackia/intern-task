import { createSlice } from "@reduxjs/toolkit";
import User from "./Main.json"

export const Slice=createSlice({
    name:"Intern-Task",
    initialState:{
        Array:User.Array
    },
    reducers:{
        isArray:(state,action)=>{
            state.Array=action.payload
        }
    }
})

export default Slice.reducer
export const{isArray}=Slice.actions