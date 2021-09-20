import { SearchResult } from "../services";

interface AppState {
    search: MovieSearchState
}

interface MovieSearchState {
    result: SearchResult,
    search: {
        text: string,
        year?: string,
        type?: string
    }
}

export type { AppState, MovieSearchState };