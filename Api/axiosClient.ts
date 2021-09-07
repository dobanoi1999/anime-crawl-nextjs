import { Storage } from './../utils/Store';
import { baseURL } from './../constants/index';
import axios from "axios"
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json',     
    },
    paramsSerializer: params => queryString.stringify(params)
})
axiosClient.interceptors.response.use(response => {
    
    if (response && response.status===200 && response.data) return response.data
 
}, err => {
    if (err?.response?.status === 401) {
        Storage({type:'clear'})  
    }
    console.log(err.response)
    return {}
})

export default axiosClient