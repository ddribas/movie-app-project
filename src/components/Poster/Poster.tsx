import { Star, StarHalf } from "lucide-react";
import styles from './Poster.module.css';
import { Link } from "react-router";

interface Poster {
    id: number;
    type: "movies" | "series";
    title: string;
    rating: number;
    poster: string;
}

function Poster ({ id, type, title, rating, poster } : Poster) {

    const trimmedRating = rating / 2;
    const halfStar = (trimmedRating % 2);
    const ratingInt = Math.ceil(trimmedRating);
    

    return(
        <div className={styles.poster}>
            <Link to={`/${type}/${id}`} className={styles.poster}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`}/>
                <p>{title}</p>
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