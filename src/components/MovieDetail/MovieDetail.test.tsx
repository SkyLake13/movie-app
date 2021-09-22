import { render, cleanup } from '@testing-library/react'

import MovieDetail from './MovieDetail';

describe('MovieDetail', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        const plot = 'this is the plot';

        const { container } = render(<MovieDetail plot={plot}/>);

        const para = container.querySelector('p');
        expect(para).toBeDefined();
        expect(para?.textContent).toBe(plot);
    });
});
