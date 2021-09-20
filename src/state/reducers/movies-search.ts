import { SearchResult } from "../../services";
import { ActionTypes, MovieAction } from "../actions/types";

export interface MovieSearchState {
    result: SearchResult,
    search: {
        text: string,
        year?: string,
        type?: string
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

const moviesSearchReducer = (state = initialState, action: MovieAction): MovieSearchState => {
    switch (action.type) {
        case ActionTypes.SEARCH_MOVIES:
            return ({
                result: action.payload.result,
                search: action.payload.search
            });
        default:
            return state;
    }
}

export {moviesSearchReducer}