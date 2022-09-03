import axios from 'axios'

const url = 'http://localhost:4000/api/feedbacks'
const cateURL = 'http://localhost:4000/api/categories'


//get all feedbacks
const getAllFeedbacks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(url,config)
    if(response.data){
        return response.data
    }
}

//add Feedbacks
const addFeedback = async (data,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(url,data,config)
    if(response.data){
        return response.data
    }
}




//get all categories
const getCategories = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(cateURL,config)
    if(response.data){
        return response.data
    }
}

//add category
const addCategory = async(data,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(cateURL,data,config)
    if(response.data){
        return response.data
    }
}

const feedbackService = {
    getAllFeedbacks,
    addFeedback,
    getCategories,
    addCategory
}

export default feedbackService