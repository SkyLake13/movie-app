import styled from "styled-components";

import { FlexDiv } from '../Div';
import { Image } from '../Image';
import { MovieMetadata } from '../MovieMetadata';

interface MovieDetailProps {
    poster?: string,
    title?: string,
    type?: string,
    year?: string,
    genre?: string,
    imdbRating?: string,
    imdbVotes?: string,
    actors?: string,
    language?: string,
    country?: string,
    plot?: string,
}

const MovieDetail = (props: MovieDetailProps) => {
    return (
        <>
            <FlexDiv>
                <Image medium src={props?.poster} alt="Poster not found"></Image>
                <Container>
                    <MovieMetadata title={props?.title}
                        type={props?.type}
                        year={props?.year}
                        genre={props?.genre}
                        rating={props?.imdbRating}
                        votes={props?.imdbVotes}
                        actors={props?.actors}
                        language={props?.language}
                        country={props?.country} />
                </Container>
            </FlexDiv>
            <hr/>
            <p>{props?.plot}</p>
        </>
    );
}

const Container = styled.div`
    margin: 0px 20px;
`;

export default MovieDetail;