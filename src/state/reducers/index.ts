import { combineReducers } from 'redux';
import { moviesSearchReducer } from './movies-search.reducer';
import { spinnerReducer } from './spinner.reducer';

const rootReducer = combineReducers({
    searchMovies: moviesSearchReducer,
    spinner: spinnerReducer,
});

export default rootReducer;