import { IHighlight, IAnime } from './common';
export interface IHomeProps {
    highlights:IHighlight[],
    animes:IAnime[],
    episodes:IAnime[],
    cartoons:IAnime[],
    picked:IAnime[]
}