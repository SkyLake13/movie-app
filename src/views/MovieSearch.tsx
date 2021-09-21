import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { FlexDiv, InvertedButton, MovieList, Search } from "../components";
import { searchMovies } from "../services";
import { AppState, MovieSearchActionTypes, 
    MovieSearchState, searchAction, nextPageAction, SearchParams } from "../state";

const MovieSearchView = () => {
    const searchMoviesState = useSelector<AppState, MovieSearchState>(state => state.searchMovies);
    const dispatch = useDispatch();

    const movies = searchMoviesState.movies;
    const search = searchMoviesState.search;
    const page = searchMoviesState.page;

    useEffect(() => {
        // Get initial state or previous state
        dispatch({ type: MovieSearchActionTypes.DEFAULT });
    }, [dispatch])

    // Perform API call for search
    const handleSearch = async (search: SearchParams) => {
        const pageNumber = 1;
        const result = await fetchData(search, pageNumber);

        dispatch(searchAction(result.Search, { ...search }, pageNumber));
    }

    // Get next page of result
    const handleMore = async () => {
        const pageNumber = page + 1;
        const result = await fetchData(search, pageNumber);
        
        dispatch(nextPageAction(result.Search, { ...search }, pageNumber));
    }

    const fetchData = async (search: SearchParams, pageNumber: number) => {
        const getPage = searchMovies(search.text, search.year, search.type);
        return await getPage(pageNumber);
    }

    return (
        <>
            <Search onSearch={(e) => handleSearch(e)} />
            <hr/>
            <FlexDiv>
                <MovieList movies={movies} />
            </FlexDiv>
            { 
                (movies && movies.length > 0) &&
                    <Container>
                        <InvertedButton onClick={ () => handleMore()}>More...</InvertedButton>
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


