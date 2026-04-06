import { useEffect, useState } from 'react';
import styles from './DetailsPage.module.css';
import Spinner from '@/components/Spinner/Spinner';
import { useLocation, useNavigate, useParams } from 'react-router';
import type { MovieDetails } from '@/types/movies';
import type { Ratings, SeriesDetails } from '@/types/series';
import { getMovieDetails, getMoviesCredits, getSeriesCredits, getSeriesDetails, getSeriesRatings } from '@/services/apiService';
import { ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import { formatMinutes, instanceOfMovieDetails } from '@/utils/instance';
import Chip from '@/components/Chip/Chip';
import type { Credits, Genre } from '@/types/generic';
import CastList from '@/components/CastList/CastList';

function DetailsPage () {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<MovieDetails|SeriesDetails>();
    const [ratings, setRatings] = useState<Ratings>();
    const [credits, setCredits] = useState<Credits>();
    const { pathname } = useLocation();
    const mode = pathname.includes("movies") ? "movies" : "series";
    const { id } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        setLoading(true);
        switch (mode) {
            case "movies":
                getMovieDetails(Number(id)).then(response => setData(response));
                getMoviesCredits(Number(id)).then(response => setCredits(response));
                break;
            case "series":
                getSeriesDetails(Number(id)).then(response => setData(response));
                getSeriesRatings(Number(id)).then(response => setRatings(response));
                getSeriesCredits(Number(id)).then(response => setCredits(response));
                break;
            default:
                break;
        }

        setLoading(false);
    },[]);
    return (
        <>
            {(loading || !data) ? (<Spinner />) :
            (
                <>
                    <section className={styles.backDropSection}>
                        <div className={styles.backdropIcons}>
                            <ArrowLeft onClick={() => navigate(-1)} />
                            <Share2 />
                        </div>
                        <img src={`https://image.tmdb.org/t/p/w1920/${data.backdrop_path}`} alt={(instanceOfMovieDetails(data)) ? data.title : data.name }/>
                        <p>{(instanceOfMovieDetails(data)) &&  formatMinutes(data.runtime)}</p>
                    </section>
                    <div className={styles.breakpoint} />
                    <section className={styles.infoSection}>
                        <div className={styles.chipSection}>
                            <div className={styles.chips}>
                                {(!instanceOfMovieDetails(data)) && ratings?.results.map((rating) => {
                                    if (rating.iso_3166_1 === "PT") {
                                        return <Chip variant="secondary" state="inactive">
                                            {rating.rating}
                                        </Chip>
                                    }
                                })}
                                {data.genres.map((genre: Genre) => {
                                        return <Chip variant="secondary" state="inactive">
                                            {genre.name}
                                        </Chip>
                                })}
                                <Chip variant="secondary" state="inactive">
                                    <Star fill="true" />{(data.vote_average / 2).toFixed(1)}
                                </Chip>
                            </div>
                            <div className={styles.heart}>
                                <Heart fill='true'/>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h1>{(instanceOfMovieDetails(data)) ? data.title : data.name}</h1>
                            <p>{data.overview}</p>
                        </div>
                        {credits && (<><CastList title='Actors' data={credits.cast} /><CastList title='Crew'  data={credits.crew} /></>)}
                        
                        {(instanceOfMovieDetails(data)) &&  (
                            <div className={styles.imdb} onClick={() => window.open(`https://www.imdb.com/title/${data.imdb_id}/`, "_blank")}>
                                <Chip variant="terciary" state="active">
                                    Open IMDb
                                </Chip>
                            </div>
                        )}

                    </section>
                </>  
            )}
        </>
    );
}

export default DetailsPage;