import styled from 'styled-components';

export const Header = styled.header`
    color: ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    padding: 0em 1em;
    display: flex;
`;