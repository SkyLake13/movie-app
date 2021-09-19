import { MovieResponse } from "./movie.response";
import { RequestBuilder } from "./request.builder";
import { SearchResult } from "./search.response";

const url = 'http://www.omdbapi.com';
const apikey = '833c72c1';

const searchMovies = (search: string, year?: string, type?: string) => {
    const requestBuilder = new RequestBuilder(url);
    requestBuilder.setApiKey(apikey).setSearch(search);
    year && requestBuilder.setYear(year);
    type && requestBuilder.setType(type);

    const uri = requestBuilder.build().toString();

    return fetch(uri)
        .then<SearchResult>((res) => res.json());
}

export function getMovieById(id: string) {
    const requestBuilder = new RequestBuilder(url);
    requestBuilder.setApiKey(apikey).setId(id);

    const uri = requestBuilder.build().toString();

    return fetch(uri)
        .then<MovieResponse>((res) => res.json());
}


export { searchMovies }