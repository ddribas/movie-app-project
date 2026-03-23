const BASE_URL = import.meta.env.VITE_API_URL;
const bearerToken = `Bearer ${import.meta.env.VITE_MOVIESDB_API_KEY}`;

export const getMoviesPopular = async (page: number = 1) => {
    const url = `${BASE_URL}/movie/popular?language=en-US&page=${page}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: bearerToken
        }
    };

    const res = await fetch(url, options);
    const json = await res.json();
    return json;
};