import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    margin: 20px;
    height: 150px;
    width: 300px;
    background: #f2f2f2;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px 5px #d0d0d0;

    &:hover {
        box-shadow: 0 0 10px 5px palevioletred;
    }
`;