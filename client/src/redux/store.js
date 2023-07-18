// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from './reducer';
// import thunk from 'redux-thunk';

// const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// export default store;

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'; // Import your root reducer
import thunkMiddleware from 'redux-thunk'; // Example middleware (you might use other middleware)

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

