import { combineReducers } from 'redux';
import { moviesSearchReducer } from './movies-search.reducer';

const rootReducer = combineReducers({
    searchMovies: moviesSearchReducer,
});

export default rootReducer;