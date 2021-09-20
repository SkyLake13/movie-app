import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import { MovieSearchState } from './reducers/movies-search';

type AppState = {
    search: MovieSearchState
}

const middlewares = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middlewares);

export { store };    
export type { AppState };

