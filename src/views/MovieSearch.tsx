import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlexDiv, InvertedButton, MovieCard, Search } from "../components";
import { CardLink } from "../components";
import { Movie, searchMovies } from "../services";
import { AppState, 
    MovieSearchActionTypes, 
    MovieSearchState } from "../state";

const MovieSearchView = () => {
    const page = useRef(1);

    const movieResult = useSelector<AppState, MovieSearchState>(state => state.search);
    const dispatch = useDispatch();

    const movies = movieResult.result.Search;
    const searchObj = movieResult.search;

    useEffect(() => {
        dispatch({
            type: MovieSearchActionTypes.DEFAULT,
        });
    }, [dispatch])

    const handleSearch = async ({ search, year, type }: SearchParams) => {
        const getPage = searchMovies(search, year, type);
        const result = await getPage(page.current);
        
        dispatch({
            type: MovieSearchActionTypes.SEARCH_MOVIES,
            payload: {
                result,
                search: {
                    text: search,
                    year,
                    type
                }
            }
        });
    }

    const handleMore = async () => {
        page.current = page.current + 1;

        const getPage = searchMovies(searchObj.text, searchObj.year, searchObj.type);
        const result = await getPage(page.current);
        
        dispatch({
            type: MovieSearchActionTypes.NEXT_PAGE,
            payload: {
                result,
                search: {
                    ...searchObj
                }
            }
        });
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
            { movies && <InvertedButton onClick={ () => handleMore()}>More...</InvertedButton> }
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