import styled from 'styled-components';

const ImdbAnchor = styled.a.attrs((attrs) => ({
    href: `https://www.imdb.com/title/${attrs.href}`,
    target: '_blank'
}))`

`;

export { ImdbAnchor }