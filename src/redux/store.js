import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { listReducer, appReducer } from './reducers'

const reducer = combineReducers({
	appState: appReducer,
	listState: listReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))
