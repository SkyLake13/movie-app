import { Action } from "redux";
import { MovieSearchState } from "../interfaces";

export enum MovieSearchActionTypes {
    SEARCH_MOVIES = 'SEARCH_MOVIES',
    DEFAULT = 'sSEARCH_DEFAULT'
}

export interface MovieAction extends Action<MovieSearchActionTypes> {
    payload: MovieSearchState
}