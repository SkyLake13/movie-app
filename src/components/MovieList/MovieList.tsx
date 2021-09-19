import styled from 'styled-components';

import { Movie } from '../../services';
import { MovieCard } from '../MovieCard';

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

interface Props {
    movies: Movie[]
}

const MovieList = ({ movies }: Props) => {
    return (
        <Flex>
            { movies.map((movie) =>
                (<MovieCard title={movie.Title}
                    year={movie.Year}
                    imdbID={movie.imdbID}
                    type={movie.Type}
                    poster={movie.Poster} />))
            }
        </Flex>
    );
}

export { MovieList }