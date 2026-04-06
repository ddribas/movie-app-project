import type { Collection, Company, Country, Genres, Language } from "./generic";

 export interface Movies {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
 }

 export interface Movie {
    adult: Boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: Boolean;
    vote_average: number;
    vote_count: number;
 }

 export interface MovieDetails {
   adult: Boolean;
   backdrop_path: string;
   belongs_to_collection: Collection;
   budget: number;
   genres: Genres;
   homepage: string;
   id: string;
   imdb_id: string;
   origin_country: string[];
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   production_companies: Company[];
   production_countries: Country[];
   release_date: string;
   revenue: number;
   runtime: number;
   spoken_languages: Language[];
   status: string;
   tagline: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
 }


