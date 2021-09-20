import { AnyAction } from 'redux';
import { searchMovies } from '../../services';
import { ActionTypes, MovieAction } from './types';

const searchMovie = (search: string, year?: string, type?: string) => {
    return async (dispatch: (param: MovieAction) => void) => {
        const result = await searchMovies(search, year, type);

        dispatch({
            type: ActionTypes.SEARCH_MOVIES,
            payload: {
                result,
                search: {
                    text: search,
                    year,
                    type
                }
            }
        });
    }
}

const getDefaultSearchState = () => {
    return (dispatch: (param: AnyAction) => void) => {
        dispatch({
            type: ActionTypes.DEFAULT,
        });
    }
}

export { searchMovie, getDefaultSearchState };