import styled from 'styled-components';

import { Card } from '../Card';
import { Image } from '../Image';

interface Props {
    title: string;
    year: string;
    type: string;
    poster: string;
}

const MovieCard = ({ title, year, type, poster }: Props) => {
    return (
        <Card>
            <Image small src={poster} alt="Poster not found"></Image>
            <Container>
                <Capitalize>{title}</Capitalize>
                <div>{year}</div>
                <Capitalize>{type}</Capitalize>
            </Container>
        </Card>
    )
}

const Capitalize = styled.div`
    text-transform: capitalize;
`;

const Container = styled.div`
    margin: 10px;
    padding: 0px;
`;

export { MovieCard }
