import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexDiv, MovieCard, Search } from "../components";
import { CardLink } from "../components";
import { Movie } from "../services";
import { AppState, getDefaultSearchState, 
    MovieSearchState, searchMovies } from "../state";

const MovieSearchView = () => {
    const movieResult = useSelector<AppState, MovieSearchState>(state => state.search);
    const dispatch = useDispatch();

    const movies = movieResult.result.Search;
    const searchObj = movieResult.search;

    useEffect(() => {
        dispatch(getDefaultSearchState());
    }, [dispatch])

    const handleSearch = async ({ search, year, type }: SearchParams) => {
        dispatch(searchMovies(search, year, type));
    }

    return (
        <>
            <Search text={searchObj.text} 
                    year={searchObj.year || ''} 
                    type={searchObj.type || ''} 
                    onSearch={(e) => handleSearch(e)} />
            <FlexDiv>
                <MovieList movies={movies} />
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

interface SearchParams {
    search: string, year: string, type: string
}

export default MovieSearchView;