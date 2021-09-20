import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexDiv, MovieCard, Search } from "../components";
import { CardLink } from "../components";
import { searchMovies, Movie, SearchResult } from "../services";
import { searchMovie } from "../state/actions/movie-actions";
import { ActionTypes } from "../state/actions/types";

const MovieSearchView = () => {
    // const [movies, setMovies] = useState<Movie[]>([]);
    const movieResult = useSelector<any>(state => state.movies.movies) as SearchResult;
    const dispatch = useDispatch();

    const search = async ({ search, year, type }: { search: string, year: string, type: string }) => {
        /* const movieResult = await searchMovies(search, year, type);
        setMovies(movieResult.Search); */
        dispatch(searchMovie(search, year, type));
    }

    return (
        <>
            <Search onSearch={(e) => search(e)} />
            <FlexDiv>
                <MovieList movies={movieResult.Search} />
            </FlexDiv>
        </>
    )
}


const MovieList = ({ movies }: { movies: Movie[] }) => {
    return (
        <>
            { 
                movies?.map((movie) =>
                    (<CardLink key={movie.imdbID} to={`/${movie.imdbID}`}>
                        <MovieCard title={movie.Title}
                            year={movie.Year}
                            type={movie.Type}
                            poster={movie.Poster} />
                    </CardLink>))
            }
        </>
    );
}

export default MovieSearchView;