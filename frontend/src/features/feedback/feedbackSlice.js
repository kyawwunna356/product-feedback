import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    feedbacks: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: ''
}


const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        reset: () => initialState
    },
    // extraReducers: builder => {
    //     builder
    //     .addCase()
    // }
})

export default feedbackSlice.reducer
export const {reset} = feedbackSlice.actions