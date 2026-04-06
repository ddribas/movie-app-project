import { useEffect, useState } from 'react';
import styles from './MoviesListPage.module.css';
import { getMovieGenre, getMoviesPopular } from '@/services/apiService';
import Searchbar from '@/components/Searchbar/Searchbar';
import Spinner from '@/components/Spinner/Spinner';
import type { Movies } from '@/types/movies';
import { instanceOfMovie } from '@/utils/instance';
import Poster from '@/components/Poster/Poster';
import type { Genres } from '@/types/generic';

function MoviesListPage () {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<Movies>();
    const [genre, setGenre] = useState<Genres>();

    useEffect(() => {
        setLoading(true);
        getMoviesPopular().then(data => setMovies(data));
        getMovieGenre().then(data => setGenre(data));
        
        setLoading(false);
    },[]);

    return (
        <>
            <Searchbar />
            {(loading || !movies) ? (<Spinner />) :
            (
                <>
                    <section>

                    </section>
                    <section className={styles.movieList}>
                        {movies.results.map((movie, index) => {
                            if (instanceOfMovie(movie)) {
                                return <Poster key={index} type="movies" id={movie.id} title={movie.title} rating={movie.vote_average} poster={movie.poster_path}  />
                            }
                        } )}
                    </section>
                </>
            )}   
        </>
           
    );
}

export default MoviesListPage;