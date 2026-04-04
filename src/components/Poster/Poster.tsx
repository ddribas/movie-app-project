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
    

    return(
        <div>
            <Link to={`/${type}/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`}/>
                <p>{title}</p>
                <div>
                    {(trimmedRating >= 1) ? 
                        <Star fill="true"  /> : 
                        ((halfStar) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 2) ? 
                        <Star fill="true"  /> : 
                        ((halfStar) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 3) ? 
                        <Star fill="true"  /> : 
                        ((halfStar) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 4) ? 
                        <Star fill="true"  /> : 
                        ((halfStar) ? <div className={styles.starOverlap} >
                            <Star  />
                            <StarHalf fill="true" />
                        </div> : <Star  />)
                    }
                    {(trimmedRating >= 5) ? 
                        <Star fill="true"  /> : 
                        ((halfStar) ? <div className={styles.starOverlap} >
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