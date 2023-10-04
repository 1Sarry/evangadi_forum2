let BaseUrl= "http://localhost:5000/api/v1"
import axios from "axios"

const endPoint = {
    LOGIN:`${BaseUrl}/login`,
    SIGNUP: `${BaseUrl}/signup`,
    ME:`${BaseUrl}/me`,
    QUESTIONS:`${BaseUrl}/questions`
}

let axiosInstance = axios.create({
    baseURL :BaseUrl,  // base url for all the api calls
})

export {endPoint, axiosInstance}