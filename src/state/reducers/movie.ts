import { ActionTypes, MovieAction } from "../actions/types";

interface InitialState {
    movies: any[]
}

const initialState: InitialState = {
    movies: []
}

const moviesReducer = (state = initialState, action: MovieAction) => {
    switch (action.type) {
        case ActionTypes.SEARCH_MOVIES:
            return {
                movies: action.payload
            }
        default:
            return state;
    }
}

export {moviesReducer}