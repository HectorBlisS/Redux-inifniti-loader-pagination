import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

let initialState = {
    characters: {
        totalPages: 0,
        error: false,
        fetching: false,
        fetched: 0,
        prev: '',
        next: 'https://rickandmortyapi.com/api/character/',
        count: 1,
        currentPage: 1,
        chars: {},
        pages: {
            page1: []
        }
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