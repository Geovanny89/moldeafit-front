import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; // Cambia esto
import {thunk} from 'redux-thunk';
import rootReducer from '../Redux/Reducer/index';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
