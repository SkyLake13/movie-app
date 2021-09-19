import styled from 'styled-components';

import { Card } from '../Card';
import { Image } from '../Image';

interface Props {
    title: string;
    year: string;
    imdbID: string;
    type: string;
    poster: string;
}

const MovieCard = ({ title, year, imdbID, type, poster }: Props) => {
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

export { MovieCard }


const CapitalizedDiv = styled.div`
    text-transform: capitalize;
`;

const MarginedDiv = styled.div`
    margin: 10px;
    padding: 0px;
`;
