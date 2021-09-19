import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { StarBorder } from "@mui/icons-material"

import { FlexDiv, Image, OutlinedSpan } from "../components";
import { getMovieById, MovieResponse } from "../services";


const DetailView = () => {
    const [movie, setMovie] = useState<MovieResponse>();

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getMovieById(id)
            .then((movieResponse) => setMovie(movieResponse));
    }, [id]);

    return (
        <Container>
            <FlexDiv>
                <div>
                    <Image src={movie?.Poster} alt="Poster not found"></Image>
                </div>
                <Container>
                    <TitleDiv>{movie?.Title}</TitleDiv>
                    <SmallDiv>{movie?.Type}</SmallDiv>
                    <SmallDiv>{movie?.Year}</SmallDiv>
                    <Genres genres={movie?.Genre.split(',') || []} />
                </Container>
            </FlexDiv>
            <div>
                <p>{movie?.Plot}</p>
            </div>
            <div>
                <p>{movie?.Actors}</p>
            </div>
            <div>
                <div>
                <StarBorder />
                <span>{movie?.imdbRating}</span>
                </div>
                <div>
                    <span>Imdb Votes</span>
                    <span>{movie?.imdbVotes}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Language</span>
                    <span>{movie?.Language}</span>
                </div>
                <div>
                    <span>Country</span>
                    <span>{movie?.Country}</span>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    margin: 20px
`;

const TitleDiv = styled.div`
    font-size: 2em;
    font-variant: small-caps
`;

const SmallDiv = styled.div`
    font-size: 1em;
    font-variant: small-caps
`;

const MarginTopDiv = styled.div`
    margin-top: 30px;
`;

const Genres = ({ genres }: { genres: string[] }) => {
    return (
        <MarginTopDiv>
            { genres.map((g) => <OutlinedSpan>{g}</OutlinedSpan>) }
        </MarginTopDiv>
    )
}

export default DetailView;