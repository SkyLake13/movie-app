import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import MovieDetailView from './MovieDetailView';


jest.mock('../../services', () => {
    return {
        _esModule: true,
        getMovieById: (id: string) => {
            return Promise.resolve({
                Title: 'movie title',
                Year: '2021',
                Plot: 'this is the plot',
                imdbID: id
            });
        }
    }
})

describe('MovieDetailView', () => {
    afterEach(() => cleanup());

    it('should render', async () => {
        const history = createMemoryHistory();
        const route = '/imdbid';
        history.push(route);

        render(
            <Router history={history}>
                <MovieDetailView />
            </Router>
        );

        const title = await screen.findByText('movie title');
        const year = await screen.findByText('2021');
        const plot = await screen.findByText('this is the plot');

        expect(title).toBeDefined();
        expect(year).toBeDefined();
        expect(plot).toBeDefined();
    });

    it('should go back in history', async () => {
        const history = createMemoryHistory();
        const route = '/imdbid';
        history.push(route);

        render(
            <Router history={history}>
                <MovieDetailView />
            </Router>
        );
        
        fireEvent.click(screen.getByRole('button'));
        const title = await screen.findByText('movie title');
    }); 
});
