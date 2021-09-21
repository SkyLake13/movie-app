import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { FlexDiv, InvertedButton, MovieList, Search } from "../components";
import { searchMovies } from "../services";
import { AppState, MovieSearchActionTypes, 
    MovieSearchState, searchAction, nextPageAction, SearchParams } from "../state";

const MovieSearchView = () => {
    const page = useRef(1);

    const searchMoviesState = useSelector<AppState, MovieSearchState>(state => state.searchMovies);
    const dispatch = useDispatch();

    const movies = searchMoviesState.movies;
    const search = searchMoviesState.search;

    useEffect(() => {
        dispatch({ type: MovieSearchActionTypes.DEFAULT });
    }, [dispatch])

    const handleSearch = async (search: SearchParams) => {
        page.current = 1;
        const result = await fetchData(search, page.current);

        dispatch(searchAction(result.Search, { ...search }));
    }

    const handleMore = async () => {
        page.current = page.current + 1;
        const result = await fetchData(search, page.current);
        
        dispatch(nextPageAction(result.Search, { ...search }));
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


