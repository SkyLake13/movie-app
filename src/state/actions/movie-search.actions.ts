import { AnyAction } from 'redux';
import { searchMovies as search } from '../../services';
import { MovieSearchActionTypes, MovieAction } from './movie-search.action-types';

const searchMovies = (text: string, year?: string, type?: string) => {
    return async (dispatch: (param: MovieAction) => void) => {
        const result = await search(text, year, type);

        dispatch({
            type: MovieSearchActionTypes.SEARCH_MOVIES,
            payload: {
                result,
                search: {
                    text,
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
            type: MovieSearchActionTypes.DEFAULT,
        });
    }
}

export { searchMovies, getDefaultSearchState };