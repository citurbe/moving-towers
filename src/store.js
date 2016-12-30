import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
