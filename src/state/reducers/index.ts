import { combineReducers } from 'redux';
import { moviesSearchReducer } from './movies-search.reducer';

const rootReducer = combineReducers({
    search: moviesSearchReducer,
});

export default rootReducer;