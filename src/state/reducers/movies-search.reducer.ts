import { MovieSearchActionTypes, MovieAction } from "../actions";
import { MovieSearchState } from "../interfaces";

const moviesSearchReducer = (state = initialState, action: MovieAction): MovieSearchState => {
    switch (action.type) {
        case MovieSearchActionTypes.SEARCH_MOVIES:
            return ({
                movies: action.payload.movies,
                search: action.payload.search
            });
        case MovieSearchActionTypes.NEXT_PAGE:
            return ({
                ...state,
                movies: [...state.movies, ...action.payload.movies]
            });
        case MovieSearchActionTypes.DEFAULT:
            return state;
        default:
            return state;
    }
}

const initialState: MovieSearchState = {
    movies: [],
    search: {
        text: '',
        year: '',
        type: ''
    }
}

export { moviesSearchReducer };
