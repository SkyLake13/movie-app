import styled from 'styled-components';

interface ImageProps {
    small?: boolean,
    medium?: boolean,
}

export const Image = styled.img<ImageProps>`
    width: ${props => getWidth(props)};
`;


const getWidth = ({ small, medium }: ImageProps) => {
    if(small) {
        return '110px';
    }

    if(medium) {
        return '300px';
    }

    return 'inherit';
}