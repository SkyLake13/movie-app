import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

import rootReducer from './reducers';

const middlewares: any[] = [thunkMiddleware];

if(process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export { store };    


