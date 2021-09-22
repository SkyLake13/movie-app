import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { FlexDiv, InvertedButton, MovieList, Search } from "../../components";
import { AppState, MovieSearchActionTypes, 
    MovieSearchState, SearchParams, SpinnerState } from "../../state";
import { nextPage, search as searchMovies } from "./actions";

const MovieSearchView = () => {
    const searchMoviesState = useSelector<AppState, MovieSearchState>(state => state.searchMovies);
    const spinner = useSelector<AppState, SpinnerState>(state => state.spinner);

    const dispatch = useDispatch();

    const movies = searchMoviesState.movies;
    const search = searchMoviesState.search;
    const page = searchMoviesState.page;

    useEffect(() => {
        // Get initial state or previous state
        dispatch({ type: MovieSearchActionTypes.DEFAULT });
    }, [dispatch])

    // Perform API call for search
    const handleSearch = (search: SearchParams) => dispatch(searchMovies(search));

    // Get next page of result
    const handleMore = () => dispatch(nextPage(search, page));

    return (
        <>
            <Search onSearch={(e) => handleSearch(e)} />
            <hr/>
            <FlexDiv>
                <MovieList movies={movies} />
            </FlexDiv>
            { spinner.pending && <Container>Loading...</Container> }
            { 
                movies.length > 0 &&
                    <Container>
                        <InvertedButton onClick={ () => handleMore()}>
                            More...
                        </InvertedButton>
                    </Container>  
            }
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 2em;
`;

export default MovieSearchView;


