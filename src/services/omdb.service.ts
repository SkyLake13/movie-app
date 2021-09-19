import { RequestBuilder } from "./request.builder";
import { SearchResult } from "./search.response";

const url = 'http://www.omdbapi.com';
const apikey = '833c72c1';

const searchMovies = (search: string, year?: string, type?: string) => {
    const urlBuilder = new RequestBuilder(url);
    urlBuilder.setApiKey(apikey).setSearch(search);

    const uri = urlBuilder.build().toString();

    return fetch(uri)
        .then<SearchResult>((res) => res.json());
}


export { searchMovies }