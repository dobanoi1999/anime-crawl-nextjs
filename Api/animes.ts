import axiosClient from "./axiosClient";

export const animeApi={
    getAnime:(params:any)=>axiosClient.get(`anime/${params.name}/${params.ep}`),
    getAnimeList:(page:any)=>axiosClient.get('anime',{params:{page}}),
    getNewEpList:()=>axiosClient.get('/new-ep'),
    getTopAnimes:(type:any)=>axiosClient.get(`rank/${type}`)
}