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
    
    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
};

export const getMovieGenre = async () => {
    const url = `${BASE_URL}/genre/movie/list?language=en`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: bearerToken
        }
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
};

export const getTVSeriesPopular = async (page: number = 1) => {
    const url = `${BASE_URL}/tv/popular?language=en-US&page=${page}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: bearerToken
        }
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
};

export const getSeriesGenre = async () => {
    const url = `${BASE_URL}/genre/tv/list?language=en`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: bearerToken
        }
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
};

//unsure if used yet
export const getTrending = async () => {
    const url = `${BASE_URL}/trending/all/day?language=en-US`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: bearerToken
        }
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json;
    } catch (error) {
        return false;
    }
};

