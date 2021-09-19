import { useState } from "react";
import styled from 'styled-components';

import { MovieCard, Search } from "../components";
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

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const MovieList = ({ movies }: { movies: Movie[] }) => {
    return (
        <Flex>
            { movies.map((movie) =>
                (<CardLink to={`/${movie.imdbID}`}>
                    <MovieCard title={movie.Title}
                        year={movie.Year}
                        imdbID={movie.imdbID}
                        type={movie.Type}
                        poster={movie.Poster} />
                </CardLink>))
            }
        </Flex>
    );
}

export default MovieSearchView;