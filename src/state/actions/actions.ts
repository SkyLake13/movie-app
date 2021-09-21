import { Movie } from "../../services";
import { MovieSearchActionTypes } from "./movie-search.action-types";

interface SearchParams {
    text: string, year?: string, type?: string
}

const searchAction = (movies: Movie[], search: SearchParams, page: number) => {
    return ({
        type: MovieSearchActionTypes.SEARCH_MOVIES,
        payload: {
            movies,
            search,
            page
        }
    });
}


const nextPageAction = (movies: Movie[], search: SearchParams, page: number) => {
    return ({
        type: MovieSearchActionTypes.NEXT_PAGE,
        payload: {
            movies,
            search,
            page
        }
    });
}

export { searchAction, nextPageAction };
export type { SearchParams };
