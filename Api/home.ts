import axiosClient from "./axiosClient"
export const homeApi ={
    getHomePage:()=>  axiosClient.get('/')
}
