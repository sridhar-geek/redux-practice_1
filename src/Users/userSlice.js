import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1', name:'Sridhar'},
    {id:'2', name:'Mark'},
    {id:'3', name:'John Doe'},
    {id:'4', name:'Mike'},
    {id:'5', name:'John'},
]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state)=> state.users
export default userSlice.reducer