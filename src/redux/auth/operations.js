import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.goit.global";
const setAuthHeader =(token) =>{
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// HTTP POST request

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI)=>{
    try {
     const response = await axios.post("/users/signup", newUser);
     setAuthHeader(response.data.token)
    //  axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
     return response.data;
     
    } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
    }
 })

//  HTTP request login

export const login = createAsyncThunk("auth/login", async(user, thunkAPI)=>{

    try {

    const response = await axios.post("/users/login", user);
    setAuthHeader(response.data.token)
    // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data
    
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);  
}
})

//  HTTP request logout

export const logout = createAsyncThunk("auth/logout", async(_, thunkAPI)=>{
    try {
        await axios.post("/users/logout");
        setAuthHeader("")
        // axios.defaults.headers.common.Authorization = "";
        // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        // return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);  
    }
    })

//  HTTP request refresch
export const refreshUser = createAsyncThunk("auth/refresh", async(_, thunkAPI)=>{
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token)
    try {
        const response = await axios.get("/users/current");
        // setAuthHeader("")
        // axios.defaults.headers.common.Authorization = "";
        // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);  
    }
    },
{
    condition: async(_, thunkAPI)=>{
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
    }
}
)
