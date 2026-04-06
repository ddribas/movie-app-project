import { useEffect, useState } from 'react';
import styles from './MoviesListPage.module.css';
import { getDiscoverMovie, getMovieGenre } from '@/services/apiService';
import Searchbar from '@/components/Searchbar/Searchbar';
import Spinner from '@/components/Spinner/Spinner';
import type { Movies } from '@/types/movies';
import { instanceOfMovie } from '@/utils/instance';
import Poster from '@/components/Poster/Poster';
import type { Genres } from '@/types/generic';
import Chip from '@/components/Chip/Chip';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function MoviesListPage () {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<Movies>();
    const [genres, setGenre] = useState<Genres>();
    const [selectedGenre, setselectedGenre] = useState<number>();
    const [selectedPage, setselectedPage] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        getDiscoverMovie().then(data => setMovies(data));
        getMovieGenre().then(data => setGenre(data));
        
        setLoading(false);
    },[]);

    useEffect(() => {
        setLoading(true);
        getDiscoverMovie(selectedPage, selectedGenre).then(data => setMovies(data));

        setTimeout(() => setLoading(false), 50);
    },[selectedPage, selectedGenre]);



    return (
        <>
            <Searchbar />
            {(!genres) ? (<></>) :
            (<section  className={styles.genreList}>
                {genres.genres.map((genre, index) => {
                    return (
                        <div onClick={() => (genre.id === selectedGenre) ? setselectedGenre(0) : setselectedGenre(genre.id) }>
                            <Chip key={index} variant={(genre.id === selectedGenre) ? "selected" : "primary"} state="active" >
                                {genre.name}
                            </Chip>
                        </div>
                    )
                })}
            </section>
            )}
            {(loading || !movies || !genres) ? (<Spinner />) :
            (
                <>
                    
                    <section className={styles.movieList}>
                        {movies.results.map((movie, index) => {
                            if (instanceOfMovie(movie)) {
                                return <div className={styles.listChild}><Poster key={index} type="movies" id={movie.id} title={movie.title} date={movie.release_date} rating={movie.vote_average} poster={movie.poster_path}  /></div>
                            }
                        } )}
                    </section>
                    <section className={styles.pageSelection}>
                        <div onClick={() => setselectedPage(selectedPage-1)}>
                            <Chip variant="primary" state="active" >
                                <ArrowLeft />
                            </Chip>
                        </div>
                        <div onClick={() => setselectedPage(selectedPage)}>
                            <Chip variant="selected" state="active" >
                                {selectedPage}
                            </Chip>
                        </div>
                        <div onClick={() => setselectedPage(selectedPage+1)}>
                            <Chip variant="primary" state="active" >
                                <ArrowRight />
                            </Chip>
                        </div>
                    </section>
                    
                </>
            )}   
        </>
           
    );
}

export default MoviesListPage;