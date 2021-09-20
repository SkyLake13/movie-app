import { Action } from "redux";
import { MovieSearchState } from "../reducers/movies-search";

export enum ActionTypes {
    SEARCH_MOVIES = 'SEARCH_MOVIES',
    DEFAULT = 'sSEARCH_DEFAULT'
}

export interface MovieAction extends Action<ActionTypes> {
    payload: MovieSearchState
}