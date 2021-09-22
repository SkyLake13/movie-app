import { SearchResult } from './search.response';
import { searchMovies, getMovieById } from './omdb.service';

jest.mock('../config', () => {
    return {
        _esModule: true,
        API_BASE_URL: 'http://localhost:4000',
        API_KEY: '123'
    };
});

describe('OmdbService', () => {
    it('should fetch movie search results', async () => {
        const url = 'http://localhost:4000/?apiKey=123&s=game&y=2021&page=1';

        window.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockSearchResult)
        });

        const searchText = 'game';
        const year = '2021';

        const searchFn = await searchMovies(searchText, year)(1);

        expect(searchFn).toBeDefined();
        expect(searchFn.Search).toHaveLength(2);

        expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should fetch movie details', async () => {
        const imdbId = 'imdbid';
        const url = `http://localhost:4000/?apiKey=123&i=${imdbId}`;

        window.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockSearchResult.Search[0])
        });

        const movie = await getMovieById(imdbId);

        expect(movie).toBeDefined();
        expect(movie.Title).toBe('game-1');
        expect(movie.Year).toBe('2021');

        expect(window.fetch).toHaveBeenCalled();
        expect(window.fetch).toHaveBeenCalledWith(url);
    });
});


const mockSearchResult: SearchResult = {
    Search: [
        {
            Title: 'game-1',
            Year: '2021',
            imdbID: 'imdb-id-1',
            Type: 'movie',
            Poster: 'http://some.site/poster1.jpg'
        },
        {
            Title: 'game-2',
            Year: '2021',
            imdbID: 'imdbid-2',
            Type: 'movie',
            Poster: 'http://some.site/poster2.jpg'
        }
    ],
    totalResults: '2',
    Response: 'true'
}
