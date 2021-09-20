import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middlewares);

export { store };    


