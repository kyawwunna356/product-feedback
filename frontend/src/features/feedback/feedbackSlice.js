import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import feedbackService from './feedbackService';

const initialState = {
    feedbacks: [],
    categories: [],
    feedbackFinish: false,
    categoryFinish: false,
    categoryLoading: false,
    feedbackLoading: false,
    mainLoading: false,
    isError: false,
    isSuccess: false,

    error: ''
}

//get feedbacks
export const getAllFeedbacks =  createAsyncThunk('feedback/getAllFeedbacks' , async (_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        const response = await feedbackService.getAllFeedbacks(token)
        console.log(response)
        return response 
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//get categories
export const getCategories = createAsyncThunk('feedback/getCategories' , async (_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        const response = await feedbackService.getCategories(token)
        console.log(response)
        return response 
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//add feedback
export const addFeedback = createAsyncThunk('feedback/addFeedback', async (data,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        const response = await feedbackService.addFeedback(data,token)
        console.log(response)
        return response 
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//add Categories 
export const addCategory = createAsyncThunk('feedback/addCategory', async (data,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        const response = await feedbackService.addCategory(data,token)
        console.log(response)
        return response 
    } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        feedbackReset: (state) => {
            state.feedbacks =  []
            state.categories =  []
            state.categoryLoading =  false
            state.feedbackLoading =  false
            state.mainLoading =  false
            state.isError =  false
            state.isSuccess =  false
            state.error =  ''
        }
    },
    extraReducers: builder => {
        builder
        //get all feedbacks
        .addCase(getAllFeedbacks.pending , (state) => {
            state.mainLoading = true
            state.feedbackLoading = true
            
        })
        .addCase(getAllFeedbacks.fulfilled , (state,action) => {
            state.feedbackFinish = true
            if(state.feedbackFinish && state.categoryFinish){
                state.mainLoading = false
                state.feedbackLoading = false
            }
            state.isSuccess = true
            state.feedbacks = action.payload
        })
        .addCase(getAllFeedbacks.rejected , (state,action) => {
            state.mainLoading = false
            state.feedbackLoading = false
            state.isError = true
            state.error = action.payload
        })

         //add feedbacks
         .addCase(addFeedback.pending , (state) => {
            state.feedbackLoading = true
        })
        .addCase(addFeedback.fulfilled , (state,action) => {
            state.feedbackLoading = false
            state.isSuccess = true
            state.feedbacks.push(action.payload)
        })
        .addCase(addFeedback.rejected , (state,action) => {
            state.feedbackLoading = false
            state.isError = true
            state.error = action.payload
        })

        //get categories
        .addCase(getCategories.pending , (state) => {
            state.mainLoading = true
            state.categoryLoading = true
        })
        .addCase(getCategories.fulfilled , (state,action) => {
            state.categoryFinish = true
            if(state.feedbackFinish && state.categoryFinish){
                state.mainLoading = false
                state.categoryLoading = false
            }
            state.isSuccess = true
            state.categories = action.payload
        })
        .addCase(getCategories.rejected , (state,action) => {
            state.mainLoading = false
            state.categoryLoading = false
            state.isError = true
            state.error = action.payload
        })

        //add category
        .addCase(addCategory.pending , (state) => {
            state.categoryLoading = true
        })
        .addCase(addCategory.fulfilled , (state,action) => {
            state.categoryLoading = false
            state.categories.push(action.payload)
        })
        .addCase(addCategory.rejected , (state,action) => {
            state.categoryLoading = false
            state.isError = true
            state.error = action.payload
        })

       
    }
})

export default feedbackSlice.reducer
export const {feedbackReset} = feedbackSlice.actions