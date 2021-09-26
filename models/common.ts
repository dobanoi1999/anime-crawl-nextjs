

export interface IHighlight {
    title:string,
    image:string,
    href:string
} 
export interface IAnime {
    title:string,
    image:string,
    href:string,
    views:string,
    episode?:string,
}
export interface IStateRouter {
    router:{href:string,name:string}[]
}
export interface IAction {
    type:string,
    data?:any
}