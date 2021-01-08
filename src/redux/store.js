import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
// store.dispatch({});

export default store;