import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import { FlexDiv, InvertedButton, MovieList, Search } from "../components";
import { searchMovies } from "../services";
import { AppState, MovieSearchActionTypes, 
    MovieSearchState, searchAction, nextPageAction, SearchParams } from "../state";

const MovieSearchView = () => {
    const page = useRef(1);

    const movieResult = useSelector<AppState, MovieSearchState>(state => state.search);
    const dispatch = useDispatch();

    const movies = movieResult.result.Search;
    const searchObj = movieResult.search;

    useEffect(() => {
        dispatch({ type: MovieSearchActionTypes.DEFAULT });
    }, [dispatch])

    const handleSearch = async (searchObj: SearchParams) => {
        const result = await fetchData(searchObj);
        
        dispatch(searchAction(result, { ...searchObj }));
    }

    const handleMore = async () => {
        page.current = page.current + 1;
        const result = await fetchData(searchObj);
        
        dispatch(nextPageAction(result, { ...searchObj }));
    }

    const fetchData = async (searchObj: SearchParams) => {
        const getPage = searchMovies(searchObj.text, searchObj.year, searchObj.type);
        const result = await getPage(page.current);
        return result;
    }

    return (
        <>
            <Search onSearch={(e) => handleSearch(e)} />
            <hr/>
            <FlexDiv>
                <MovieList movies={movies} />
            </FlexDiv>
            { 
                movies &&
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


