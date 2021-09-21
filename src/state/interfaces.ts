import { Movie } from "../services";

interface AppState {
    searchMovies: MovieSearchState,
    spinner: SpinnerState
}

interface MovieSearchState {
    movies: Movie[],
    search: {
        text: string,
        year?: string,
        type?: string
    },
    page: number
}

interface SpinnerState {
    pending: boolean;
}

export type { AppState, MovieSearchState, SpinnerState };