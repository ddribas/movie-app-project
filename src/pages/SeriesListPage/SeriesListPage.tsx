import { useEffect, useState } from 'react';
import styles from './SeriesListPage.module.css';
import { getDiscoverSeries, getSeriesGenre } from '@/services/apiService';
import Searchbar from '@/components/Searchbar/Searchbar';
import Spinner from '@/components/Spinner/Spinner';
import { instanceOfMovie } from '@/utils/instance';
import Poster from '@/components/Poster/Poster';
import type { Genres } from '@/types/generic';
import Chip from '@/components/Chip/Chip';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Series } from '@/types/series';

function SeriesListPage () {
    const [loading, setLoading] = useState<boolean>(false);
    const [series, setSeries] = useState<Series>();
    const [genres, setGenre] = useState<Genres>();
    const [selectedGenre, setselectedGenre] = useState<number>();
    const [selectedPage, setselectedPage] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        getDiscoverSeries().then(data => setSeries(data));
        getSeriesGenre().then(data => setGenre(data));
        
        setLoading(false);
    },[]);

    useEffect(() => {
        setLoading(true);
        getDiscoverSeries(selectedPage, selectedGenre).then(data => setSeries(data));

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
            {(loading || !series || !genres) ? (<Spinner />) :
            (
                <>
                    
                    <section className={styles.serieList}>
                        {series.results.map((serie, index) => {
                            if (!instanceOfMovie(serie)) {
                                return <Poster key={index} type="series" id={serie.id} title={serie.name} rating={serie.vote_average} poster={serie.poster_path}  />
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

export default SeriesListPage;