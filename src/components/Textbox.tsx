import styled from 'styled-components';

export const Textbox = styled.input`
    color: ${props => props.theme.bg };
    border: 1px solid ${props => props.theme.bg };

    font-size: 1em;
    margin: 1em;
    padding: 0.35em 1em;
    border-radius: 3px;
    cursor: text;
`;