import type { Movie, Movies } from "@/types/movies";
import type { Series } from "@/types/series";
import { ArrowRight } from "lucide-react";
import Poster from "../Poster/Poster";

interface list {
    title: string;
    data: Movies | Series;
}

function ProductList ({ title, data } : list) {
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <ArrowRight />
            </div>
            <div>
                {data.results.map((product, index) => {
                    if (instanceOfMovie(product)) {
                        return <Poster key={index} type="movies" id={product.id} title={product.title} rating={product.vote_average} poster={product.poster_path}  />
                    } else {
                        return <Poster key={index} type="series" id={product.id} title={product.name} rating={product.vote_average} poster={product.poster_path} />
                    }
                } )}
            </div>
        </section>
    );
}

export default ProductList;


function instanceOfMovie(object: any): object is Movie {
    return 'title' in object;
}