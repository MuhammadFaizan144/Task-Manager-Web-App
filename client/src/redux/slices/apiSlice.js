import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// createApi → Used to define an API service (where you’ll declare endpoints, caching, etc.).
// fetchBaseQuery → A small wrapper around fetch that helps make HTTP requests (like GET, POST, PUT).
const API_URL="http://localhost:8800/api"
// This is your backend server URL (base address for API requests).
// Example: if your endpoint is /users, it will actually call http://localhost:8800/api/users.
const baseQuery=fetchBaseQuery({baseUrl: API_URL})
// Here you configure the baseQuery once.
// It tells RTK Query: “Every request should start with http://localhost:8800/api.”
// Later, you’ll just write the path (like /users) instead of repeating the whole URL.
export const apiSlice=createApi({
    baseQuery,
    tagTypes:[],
    endpoints:(builder)=>({}),
})
// createApi sets up the API slice for Redux.
// baseQuery → tells it how to make requests (we already configured it above).
// tagTypes: [] → used for caching and invalidating data (empty for now).
// Example: if you fetch a list of users with tagTypes: ["User"], you can automatically refetch when a user is added or deleted.
// endpoints: (builder) => ({}) → where you define actual API operations (like getUsers, addUser, etc.). Right now it’s empty.