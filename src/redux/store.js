import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
// store.dispatch()
unsubscribe();
export default store;