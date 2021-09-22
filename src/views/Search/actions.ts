import { Dispatch } from "redux";
import { searchMovies } from "../../services";
import { nextPageAction, searchAction, SearchParams, spinnerComplete, spinnerPending } from "../../state";

const fetchData = async (search: SearchParams, pageNumber: number) => {
    const getPage = searchMovies(search.text, search.year, search.type);
    return await getPage(pageNumber);
}

const nextPage = (search: SearchParams, page: number) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(spinnerPending());

        const pageNumber = page + 1;
        const result = await fetchData(search, pageNumber);
        
        dispatch(nextPageAction(result.Search, { ...search }, pageNumber));
        dispatch(spinnerComplete());
    }
}

const search = (search: SearchParams) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(spinnerPending());
        
        const pageNumber = 1;
        const result = await fetchData(search, pageNumber);

        dispatch(searchAction(result.Search, { ...search }, pageNumber));
        dispatch(spinnerComplete());
    }
}

export { nextPage, search }