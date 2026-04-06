export interface Genres {
    [x: string]: any;
    genres: Genre[];
}

export interface Genre {
    id: number;
    name: string;
}

 export interface Collection {
   id: number,
   name: string,
   poster_path: string,
   backdrop_path: string
 }

 export interface Company {
   id: number;
   logo_path: string;
   name: string;
   origin_country: string;
 }

 export interface Country {
   iso_3166_1: string;
   name: string;
 }

 export interface Language {
   english_name: string;
   iso_639_1: string;
   name: string;
 }

 export interface Credits {
    id: number;
    cast: Cast[];
    crew: Crew[];
 }

 export type Cast = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
 }

 export type Crew = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
 }