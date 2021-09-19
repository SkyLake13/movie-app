import { useState } from "react";

import { FlexDiv, MovieCard, Search } from "../components";
import { CardLink } from "../components";
import { searchMovies, Movie } from "../services";

const MovieSearchView = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const search = async ({ search, year, type }: { search: string, year: string, type: string }) => {
        const movieResult = await searchMovies(search, year, type);
        setMovies(movieResult.Search);
    }

    return (
        <>
            <Search onSearch={(e) => search(e)} />
            <MovieList movies={movies} />
        </>
    )
}


const MovieList = ({ movies }: { movies: Movie[] }) => {
    return (
        <FlexDiv>
            { 
                movies?.map((movie) =>
                    (<CardLink key={movie.imdbID} to={`/${movie.imdbID}`}>
                        <MovieCard title={movie.Title}
                            year={movie.Year}
                            type={movie.Type}
                            poster={movie.Poster} />
                    </CardLink>))
            }
        </FlexDiv>
    );
}

export default MovieSearchView;