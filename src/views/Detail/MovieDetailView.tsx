import { Icon } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components";

import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { getMovieById, MovieResponse } from "../../services";

const DetailView = () => {
    const history = useHistory();
    const [movie, setMovie] = useState<MovieResponse>();

    // Get movie id from url params
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        // Fetch movie data
        getMovieById(id)
            .then((movieResponse) => setMovie(movieResponse));
    }, [id]);

    const handleBack = () => history.goBack();

    return (
        <Container>
            <Button onClick={ () => handleBack() }>
                <Icon>arrow_back</Icon>
            </Button>
            { 
                movie && <MovieDetail title={movie?.Title}
                         type={movie?.Type}
                         year={movie?.Year}
                         poster={movie?.Poster}
                         imdbRating={movie?.imdbRating}
                         imdbVotes={movie?.imdbVotes}
                         genre={movie?.Genre}
                         plot={movie?.Plot}
                         actors={movie?.Actors}
                         language={movie?.Language}
                         country={movie?.Country}/>
            }
            { !movie && <div>Loading...</div> }
        </Container>
    );
}

const Container = styled.div`
    margin: 20px
`;

export default DetailView;