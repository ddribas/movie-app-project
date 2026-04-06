import { Star, StarHalf } from "lucide-react";
import styles from './Poster.module.css';
import { Link } from "react-router";

interface IPoster {
    id: number;
    type: "movies" | "series";
    title: string;
    date: string;
    rating: number;
    poster: string;
}

function Poster ({ id, type, title, date, rating, poster } : IPoster) {

    const trimmedRating = rating / 2;
    const halfStar = (trimmedRating % 2);
    const ratingInt = Math.ceil(trimmedRating);
    

    return(
        <div className={styles.poster}>
            <Link to={`/${type}/${id}`} className={styles.poster}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title}/>
                <div className={styles.posterTitle}>
                    <p>{title}</p>
                    <p>{date.split('-')[0]}</p>
                </div>
                <div className={styles.stars}>
                    {(trimmedRating >= 1) ? 
                        <Star fill="true"  /> : 
                        ((halfStar && ratingInt === 1) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 2) ? 
                        <Star fill="true"  /> : 
                        ((halfStar && ratingInt === 2) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 3) ? 
                        <Star fill="true"  /> : 
                        ((halfStar && ratingInt === 3) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 4) ? 
                        <Star fill="true"  /> : 
                        ((halfStar && ratingInt === 4) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 5) ? 
                        <Star fill="true"  /> : 
                        ((halfStar && ratingInt === 5) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                </div>
            </Link>
        </div>
    );
}
export default Poster;