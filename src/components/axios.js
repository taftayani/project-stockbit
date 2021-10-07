import axios from "axios";
const baseURL= process.env.REACT_APP_WEB_URL_API
const axiosInstance = axios.create({
    baseURL: baseURL
})
export default axiosInstance