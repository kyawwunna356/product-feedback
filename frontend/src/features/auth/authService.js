import axios from 'axios'

const URL = 'http://localhost:4000/api/users'

const login = async (userData) => {
    const response = await axios.post(URL+'/login',userData)
    if(response.data) {
        localStorage.setItem('product-feedback-user',JSON.stringify(response.data))
    }
    return response.data
}

const register = async(userData) => {
    const response  = await axios.post(URL,userData)
    if(response.data) {
        localStorage.setItem('product-feedback-user',JSON.stringify(response.data))
    }
    return response.data
}


const authService = {
    login,
    register
}

export default authService