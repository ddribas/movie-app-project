import type { Movies } from "@/types/movies";
import type { Series } from "@/types/series";
import { ArrowRight } from "lucide-react";
import Poster from "../Poster/Poster";
import styles from './ProductList.module.css';
import { instanceOfMovie } from "@/utils/instance";
import { Link } from "react-router";

interface list {
    title: string;
    data: Movies | Series;
}

function ProductList ({ title, data } : list) {
    return (
        <section className={styles.listSection}>
            <Link to={`/${title.toLowerCase()}`} className={styles.listHeader}>
                <h2>{title}</h2>
                <ArrowRight />
            </Link>
            <div className={styles.listColumn}>
                {data.results.map((product, index) => {
                    if (instanceOfMovie(product)) {
                        return <Poster key={index} type="movies" id={product.id} title={product.title} date={product.release_date} rating={product.vote_average} poster={product.poster_path}  />
                    } else {
                        return <Poster key={index} type="series" id={product.id} title={product.name} date={product.first_air_date} rating={product.vote_average} poster={product.poster_path} />
                    }
                } )}
            </div>
        </section>
    );
}

export default ProductList;


