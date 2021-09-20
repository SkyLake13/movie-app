import { Action } from "redux";
import { SearchResult } from "../../services";

export enum ActionTypes {
    SEARCH_MOVIES = 'SEARCH_MOVIES'
}

export interface MovieAction extends Action<ActionTypes> {
    payload: SearchResult
}