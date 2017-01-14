import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

export default () => {
    const enhancer = compose(
        applyMiddleware(thunk)
    )
    return createStore(reducer, enhancer)
}