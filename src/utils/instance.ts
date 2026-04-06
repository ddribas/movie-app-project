import type { Movie, MovieDetails } from "@/types/movies";
import type { Serie, SeriesDetails } from "@/types/series";

export const instanceOfMovie = (object: Movie | Serie): object is Movie => {
    return 'title' in object;
}


export const instanceOfMovieDetails = (object: MovieDetails | SeriesDetails): object is MovieDetails => {
    return 'title' in object;
}


export const formatMinutes = (min: number): string => {
  const hours = Math.floor(min / 60);
  const mins = min % 60;
  return (hours > 0) ? `${hours}h ${mins}min` : `${mins}min`;
}