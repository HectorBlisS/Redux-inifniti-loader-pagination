import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

let initialState = {
    characters: {
        error: false,
        fetching: false,
        fetched: 0,
        prev: '',
        next: 'https://rickandmortyapi.com/api/character/',
        count: 0,
        currentPage: 1,
        chars: {}
    },
    users: {
        current: {
            name: "Blissito",
            email: "bliss@bliss.com",
            bio: "A bliss no le gusta trabajá"
        },
        array: [],
        object: {},
        data: {
            email: '',
            password: ''
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;

export default () => createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
    //applyMiddleware(thunk)
) 