/**
 * NavBar
 * 
 * SearchBar
 * 
 * Carrousel
 * 
 * MyList
 * 
 * Recommended 
 * 
 * If Recommended or MyList are selected change into each respectively
 * 
 */

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
                </>
            )}   
        </>
           
    );


/*
    if (loading) {
        return (
            <>
                <Searchbar />
                <Spinner />
            </>
        );
    } else if (movies && series) {
        console.log("hey")
        return    <>
                <Searchbar />
                <ProductList title="Movies" data={movies} />
            </>
    } else {
        return (
            <>
                <Searchbar />
                <Spinner />
            </>
        );
    }*/
}

export default Home;