import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { quoteReducer } from './quoteSlice';

export const store = createStore(
	quoteReducer,
	applyMiddleware(thunk)
);
