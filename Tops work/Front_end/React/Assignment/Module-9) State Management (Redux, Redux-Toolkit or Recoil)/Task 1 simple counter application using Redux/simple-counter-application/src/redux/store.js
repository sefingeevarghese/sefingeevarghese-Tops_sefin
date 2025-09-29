import { createStore } from 'redux';
import counterReducer from './reducer';

// Create Redux store
const store = createStore(counterReducer);

export default store;