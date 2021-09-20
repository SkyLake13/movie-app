import { SearchResult } from "../../services";
import { MovieSearchActionTypes, MovieAction } from "../actions";
import { MovieSearchState } from "../interfaces";

const moviesSearchReducer = (state = initialState, action: MovieAction): MovieSearchState => {
    switch (action.type) {
        case MovieSearchActionTypes.SEARCH_MOVIES:
            return ({
                result: action.payload.result,
                search: action.payload.search
            });
        case MovieSearchActionTypes.NEXT_PAGE:
            return ({
                ...state,
                result: {
                    ...state.result,
                    Search: [...state.result.Search, ...action.payload.result.Search]
                }
            });
        case MovieSearchActionTypes.DEFAULT:
            return state;
        default:
            return state;
    }
}

const initialState: MovieSearchState = {
    result: {} as SearchResult,
    search: {
        text: '',
        year: '',
        type: ''
    }
}

export { moviesSearchReducer };
