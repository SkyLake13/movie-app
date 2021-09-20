import { Action } from "redux";
import { MovieSearchState } from "../interfaces";

export enum MovieSearchActionTypes {
    SEARCH_MOVIES = 'SEARCH_MOVIES',
    NEXT_PAGE = 'SEARCH_MOVIES_NEXT_PAGE',
    DEFAULT = 'sSEARCH_DEFAULT'
}

export interface MovieAction extends Action<MovieSearchActionTypes> {
    payload: MovieSearchState
}