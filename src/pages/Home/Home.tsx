import Searchbar from "@/components/Searchbar/Searchbar";
import Spinner from "@/components/Spinner/Spinner";
import ProductList from "@/components/ProductList/ProductList";
import { getMoviesPopular, getTVSeriesPopular } from "@/services/apiService";
import type { Movies } from "@/types/movies";
import type { Series } from "@/types/series";
import { useEffect, useState } from "react";


function Home() {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<Movies>();
    const [series, setSeries] = useState<Series>();


    useEffect(() => {
        setLoading(true);
        getMoviesPopular().then(data => setMovies(data));
        getTVSeriesPopular().then(data => setSeries(data));
        
        setLoading(false);
    },[]);


    return (
        <>
            <Searchbar />
            {(loading || !movies || !series) ? (<Spinner />) :
            (
                <>
                    <ProductList title="Movies" data={movies} />
                    <ProductList title="Series" data={series} />
                </>
            )}   
        </>
           
    );
}

export default Home;