interface ITag {
    href:string,
    tag:string
}
export interface IInfoAnime {
    video?:string,
    title:string,
    views:string,
    desc:string,
    genre:ITag[],
    like?:string,
    follow?:string
}