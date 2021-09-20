import { Icon } from "@material-ui/core";
import styled from "styled-components";
import { OutlinedSpan } from "./Span";

interface Props {
    title?: string,
    type?: string,
    year?: string,
    genre?: string,
    rating?: string,
    votes?: string,
    actors?: string,
    language?: string,
    country?: string
}
const MovieMetadata = ({ title, type, year, genre, rating, votes, actors, language, country }: Props) => {
    return (
        <>
            <Title>{title}</Title>
            <Small>{type}</Small>
            <Small>{year}</Small>
            <Genres genres={genre?.split(',') || []} />
            <Container>
                <Icon>star</Icon>
                <span>{rating}</span>
            </Container>
            <Container>
                <Icon>thumb_up</Icon>
                <span>{votes}</span>
            </Container>
            <Container>
                {actors}
            </Container>
            <Container>
                {language}
            </Container>
            <Container>
                {country}
            </Container>
        </>
    );
}

const Title = styled.div`
    font-size: 2em;
    font-variant: small-caps
`;

const Small = styled.div`
    font-size: 1em;
    font-variant: small-caps
`;

const Container = styled.div`

    margin: 15px 0px;
`;

const Genres = ({ genres }: { genres: string[] }) => {
    return (
        <Container>
            {genres.map((g) => <OutlinedSpan key={g}>{g}</OutlinedSpan>)}
        </Container>
    )
}

export { MovieMetadata }