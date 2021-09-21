import { API_BASE_URL, API_KEY } from "../config";
import { MovieResponse } from "./movie.response";
import { RequestBuilder } from "./request.builder";
import { SearchResult } from "./search.response";

const url = API_BASE_URL;
const apikey = API_KEY;

const searchMovies = (search: string, year?: string, type?: string) => {
    const requestBuilder = new RequestBuilder(url);
    requestBuilder.setApiKey(apikey).setSearch(search);
    year && requestBuilder.setYear(year);
    type && requestBuilder.setType(type);

    return (page: number) => {
        requestBuilder.setPage(page);
        const url = requestBuilder.build().toString();
    
        return fetch(url)
            .then<SearchResult>((res) => res.json());
    }
}

export function getMovieById(id: string) {
    const requestBuilder = new RequestBuilder(url);
    requestBuilder.setApiKey(apikey).setId(id);

    const uri = requestBuilder.build().toString();

    return fetch(uri)
        .then<MovieResponse>((res) => res.json());
}


export { searchMovies }