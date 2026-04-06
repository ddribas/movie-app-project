import type { Company, Country, Genres, Language } from "./generic";

 export interface Series {
    page: number;
    results: Serie[];
    total_pages: number;
    total_results: number;
 }

 export interface Serie {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
 }

 export interface SeriesDetails {
    adult: Boolean;
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genres;
    homepage: string;
    id: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: lastEpisodeToAir;
    name: string;
    next_episode_to_air: string;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Company[];
    production_countries: Country[];
    seasons: Season[];
    spoken_languages: Language[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
  }

  type CreatedBy = {
   id: number;
   credit_id: string;
   name: string;
   gender: number;
   profile_path: string;
  }

  type lastEpisodeToAir = {
   id: number;
   name: string;
   overview: string;
   vote_average: number;
   vote_count: number;
   air_date: string;
   episode_number: number;
   production_code: string;
   runtime: number;
   season_number: number;
   show_id: number;
   still_path: string;
  }

  type Network = {
   id: number;
   logo_path: string;
   name: string;
   origin_country: string;
  }

  type Season = {
   air_date: string;
   episode_count: number;
   id: number;
   name: string;
   overview: string;
   poster_path: string;
   season_number: number;
   vote_average: number;
  }

  export interface Ratings {
   results: Rating[];
   id: number;
  }

  type Rating = {
   descriptors: [];
   iso_3166_1: string;
   rating: string;
  }