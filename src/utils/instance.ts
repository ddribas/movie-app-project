import type { Movie } from "@/types/movies";

export const instanceOfMovie = (object: any): object is Movie => {
    return 'title' in object;
}
