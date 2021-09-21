import { Movie } from "../services";

interface AppState {
    searchMovies: MovieSearchState
}

interface MovieSearchState {
    movies: Movie[],
    search: {
        text: string,
        year?: string,
        type?: string
    }
}

export type { AppState, MovieSearchState };