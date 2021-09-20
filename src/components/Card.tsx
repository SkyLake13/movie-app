import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    margin: 10px;
    height: 150px;
    width: 300px;
    background: ${props => props.theme.fg};
    overflow: hidden;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 10px 5px #d0d0d0;

    &:hover {
        box-shadow: 0 0 10px 5px ${props => props.theme.bg};
    }
`;