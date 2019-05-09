import { combineReducers } from 'redux'
import {
    TYPING_CREDENTIALS,
    SET_USER_DATA_SUCCESS,
    UPDATE_USER_DATA,
    FETCH_USERS_LIST_SUCCESS
} from '../actions/userActions'

function current(state = {}, action) {
    switch (action.type) {
        case UPDATE_USER_DATA:
            return action.payload
        case "REMOVE_USER_DATA":
            return action.payload
        case "GET_USER_DATA":
        case "MERGE_USER_DATA":
        default:
            return state
    }
}

function data(state = {}, action) {
    switch (action.type) {
        case SET_USER_DATA_SUCCESS:
            return action.user
        case TYPING_CREDENTIALS:
            return action.credentials // recibiendo las 2 cosas
        default:
            return state
    }
}

function array(state = [], action) {
    if (action.type === FETCH_USERS_LIST_SUCCESS) {
        return action.payload
    } else {
        return state
    }
}

function object(state = {}, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({ array, object, data, current })