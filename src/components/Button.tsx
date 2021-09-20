import styled from 'styled-components';

export const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.bg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
`;

export const InvertedButton = styled(Button)`
  color: ${props => props.theme.bg};
  border: 2px solid ${props => props.theme.bg};
  background: ${props => props.theme.fg};
`;