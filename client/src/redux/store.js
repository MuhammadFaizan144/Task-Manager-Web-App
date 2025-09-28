import { configureStore } from "@reduxjs/toolkit"
// 1. configureStore

// Comes from @reduxjs/toolkit.
// Helps create a Redux store with less boilerplate.
// Automatically sets up:
// Redux DevTools
// Middleware (like redux-thunk by default)
// Store combining

import authReducer from "./slices/authSlice"

import { apiSlice } from "./slices/apiSlice"
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
        // This is where you tell Redux which state slices your app has.
        // auth: authReducer
        // → This manages authentication-related state (like login, logout, user data).
        // [apiSlice.reducerPath]: apiSlice.reducer
        // → This is for RTK Query API slice.
        // → apiSlice.reducerPath is usually "api". So it becomes:
        // api: apiSlice.reducer
        // → This handles caching & storing server responses from API requests.

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware), 

        // getDefaultMiddleware() → includes Redux default middleware (e.g., handling async logic, immutability checks).
        // .concat(apiSlice.middleware) → adds RTK Query middleware.
        // This middleware:
        // Handles API calls automatically
        // Caches responses
        // Refreshes data if needed

    devTools: true,
        // Enables Redux DevTools in your browser.
        // Lets you see state changes step by step.
        
})
export default store;