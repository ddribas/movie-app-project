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

export const getDiscoverMovie = async (page: number = 1, genre: number = 0) => {
    const url = (genre) ? `${BASE_URL}/discover/movie?page=${page}&with_genres=${genre}` : `${BASE_URL}/discover/movie?&page=${page}`;
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

export const getMovieDetails = async (id: number) => {
    const url =`${BASE_URL}/movie/${id}`;
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

export const getMoviesCredits = async (id: number) => {
    const url =`${BASE_URL}/movie/${id}/credits`;
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

export const getDiscoverSeries = async (page: number = 1, genre: number = 0) => {
    const url = (genre) ? `${BASE_URL}/discover/tv?page=${page}&with_genres=${genre}` : `${BASE_URL}/discover/tv?&page=${page}`;
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

export const getSeriesDetails = async (id: number) => {
    const url =`${BASE_URL}/tv/${id}`;
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

export const getSeriesRatings = async (id: number) => {
    const url =`${BASE_URL}/tv/${id}/content_ratings`;
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

export const getSeriesCredits = async (id: number) => {
    const url =`${BASE_URL}/tv/${id}/credits`;
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

