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
            <Image src={poster} alt="Poster not found"></Image>
            <MarginedDiv>
                <CapitalizedDiv>{title}</CapitalizedDiv>
                <div>{year}</div>
                <CapitalizedDiv>{type}</CapitalizedDiv>
            </MarginedDiv>
        </Card>
    )
}

const CapitalizedDiv = styled.div`
    text-transform: capitalize;
`;

const MarginedDiv = styled.div`
    margin: 10px;
    padding: 0px;
`;

export { MovieCard }