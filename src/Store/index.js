import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'
import rootreducer from '../Redux/Reducer/index'

export const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk)))