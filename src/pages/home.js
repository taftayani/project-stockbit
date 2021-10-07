import CardMovie from "../components/card"
import axios from "axios"
import { useEffect } from "react"
import axiosInstance from "../components/axios"
const Homepage = () => {
    useEffect( async () => {
        const response = await axiosInstance.post('?apikey=59136dff&i=tt3896198')
        console.log('movies',response)
    })
    return (
        <div>
           <CardMovie/>
        </div>
    )
}
export default Homepage