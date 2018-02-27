import { createStore, combineReducers, applyMiddleware } from 'redux'

import { routerReducer, routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import reducers from './Redux/reducers'

const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default createStore(
 combineReducers({
   ...reducers,
   router: routerReducer
 }),
 applyMiddleware(middleware)
)