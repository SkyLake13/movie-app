import { searchMovies } from '../../services';
import { ActionTypes, MovieAction } from './types';

export function searchMovie(search: string, year?: string, type?: string) {
    return async (dispatch: (param: MovieAction) => void) => {
        const result = await searchMovies(search, year, type);

        dispatch({
            type: ActionTypes.SEARCH_MOVIES,
            payload: result
        });
    }
}