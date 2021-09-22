import { render, cleanup } from '@testing-library/react'

import { MovieCard } from './MovieCard';

describe('MovieCard', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        const props = {
            title: 'title',
            year: '2021',
            type: 'movie',
            poster: 'http://some.site/poster.jpg'
        };

        const { container } = render(<MovieCard {...props}/>);

        const poster = container.querySelector('img');
        expect(poster).toBeDefined();
        expect(poster?.src).toBe(props.poster);
    });
});
