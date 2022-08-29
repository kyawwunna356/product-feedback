import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('product-feedback-user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    error: '',
    isLoading: false,
    test: false
}


export const login = createAsyncThunk('auth/login' , async (userData,thunkAPI) => {
    try {
        const user = await authService.login(userData)
        return user
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }   
})

export const registerUser = createAsyncThunk('auth/registerUser', async (userData,thunkAPI) => {
    try {
        const user = await authService.register(userData)
        return user
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => initialState ,
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state,action) => {
            state.isLoading = false
            state.isError = true
            state.error = action.payload
        })
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state,action) => {
            state.isLoading = false
            state.isError = true
            state.error = action.payload
        })
    }
})


export default authSlice.reducer
export const {reset } = authSlice.actions