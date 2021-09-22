
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import MovieSearch from './MovieSearch';

describe('MovieSearch', () => {
    afterEach(() => cleanup());

    it('should render', async () => {
        const history = createMemoryHistory();
        const route = '/';
        history.push(route);

        const store = mockStore(intialState([]));

        render(
            <Provider store={store}>
                <Router history={history}>
                    <MovieSearch />
                </Router>
            </Provider>
        );

        const button = screen.getByRole('button');

        expect(button).toBeDefined();
        expect(button.textContent).toBe('Search');
    });

    it('should render movie list', async () => {
        const history = createMemoryHistory();
        const route = '/';
        history.push(route);

        const store = mockStore(intialState([
            {
                Title: 'title-1',
                Year: '2021',
                Type: 'movie',
                Poster: 'http://some.site/poster.jpg',
                imdbID: 'imdbid-1'
            }
        ]));

        render(
            <Provider store={store}>
                <Router history={history}>
                    <MovieSearch />
                </Router>
            </Provider>
        );

        const title = await screen.findAllByText('title-1');
        const year = await screen.findAllByText('2021');
        const type = await screen.findAllByText('movie');

        expect(title).toBeDefined();
        expect(year).toBeDefined();
        expect(type).toBeDefined();
    });

    it('should fetch movie list', async () => {
        const searchText = 'title';
        const year = '2021';

        const history = createMemoryHistory();
        const route = '/';
        history.push(route);

        const store = mockStore(intialState([]));
        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <Router history={history}>
                    <MovieSearch />
                </Router>
            </Provider>
        );

        fireEvent.input(screen.getByPlaceholderText('Title'), {
            target: { value: searchText }
        });

        fireEvent.input(screen.getByPlaceholderText('Year'), {
            target: { value: year }
        });
        
        fireEvent.click(screen.getByRole('button'));

        expect(store.dispatch).toHaveBeenCalled();
    });
});

const mockStore = configureStore();

const intialState = (movies: any[]) => { return {
    searchMovies: {
        movies: [...movies],
        search: {
            text: '',
            year: '',
            type: ''
        },
        page: 0
    },
    spinner: {
            pending: false
        }
    }
}

