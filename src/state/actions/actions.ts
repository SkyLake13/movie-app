import { SearchResult } from "../../services";
import { MovieSearchActionTypes } from "./movie-search.action-types";

interface SearchParams {
    text: string, year?: string, type?: string
}

const searchAction = (result: SearchResult, search: SearchParams) => {
    return ({
        type: MovieSearchActionTypes.SEARCH_MOVIES,
        payload: {
            result,
            search: search
        }
    });
}


const nextPageAction = (result: SearchResult, searchObj: SearchParams) => {
    return ({
        type: MovieSearchActionTypes.NEXT_PAGE,
        payload: {
            result,
            search: searchObj
        }
    });
}

export { searchAction, nextPageAction };
export type { SearchParams };
