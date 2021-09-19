import { useState } from "react";

import { MovieList, Search } from "../components";
import { searchMovies, Movie } from "../services";

const SearchView = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const search = async ({ search, year, type }: { search: string, year: string, type: string }) => {
        const movieResult = await searchMovies(search, year, type);
        setMovies(movieResult.Search);
    }

    return (
        <>
            <Search onSearch={ (e) => search(e) }/>
            <MovieList movies={movies}/>
        </>
    )
}

export { SearchView };