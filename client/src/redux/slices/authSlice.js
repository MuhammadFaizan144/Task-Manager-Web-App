import { createSlice } from "@reduxjs/toolkit";
// makes Redux state management easier (no need to write action types + reducers separately).
const initialState={
    user:localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    isSidebarOpen:false,
};
// When the app starts, Redux checks if there’s a userInfo stored in the browser’s localStorage.
// If yes → parses it into an object and sets it as user.
// If no → sets user = null (means no one is logged in).
// isSidebarOpen starts as false (sidebar is closed).
// ✅ This ensures login persists across page reloads.
const authSlice=createSlice({
    name:"auth",
    initialState,
// A slice is like a small piece of the Redux store that manages auth-related state.
// You define actions (setCredentials, logout, setOpenSidebar) + reducers (how state changes).
    reducers:{
        setCredentials:(state,action)=>{
            state.user=action.payload;
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        },

            // When you login successfully, you’ll dispatch this with user data:
            // dispatch(setCredentials({ name: "Ali", token: "xyz123" }))
            // This:
            // Stores the user object in Redux state (state.user).
            // Saves it in localStorage → so user stays logged in after refresh.
        logout:(state,action)=>{
            state.user=null;
            localStorage.removeItem("userInfo")
        },
            // When user clicks logout button → you dispatch:
            // dispatch(logout())
            // This:
            // Clears user info from Redux state (state.user = null).
            // Removes userInfo from localStorage.
            // After this → app knows user is logged out.
        setOpenSidebar:(state,action)=>{
            state.isSidebarOpen=action.payload
        }
            // Controls whether sidebar is open or closed.
            // Example:
            // dispatch(setOpenSidebar(true))   // open sidebar
            // dispatch(setOpenSidebar(false))  // close sidebar

    }
})
export const{setCredentials,logout,setOpenSidebar}=authSlice.actions
export default authSlice.reducer

// How It Works in Real Life
// User opens app
// Redux checks localStorage.
// If token exists → user is already logged in.
// If not → user must log in.
// User logs in
// After API call returns success → dispatch setCredentials(userData).
// State updates + data stored in localStorage.
// User logs out
// Dispatch logout().
// Clears state + removes from localStorage.
// Sidebar toggle
// Dispatch setOpenSidebar(true/false) whenever user clicks toggle button.