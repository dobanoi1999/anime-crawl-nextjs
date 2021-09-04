import axiosClient from "./axiosClient";

export const animeApi={
    getAnime:(name:any)=>axiosClient.get(`/anime/${name}`)
}