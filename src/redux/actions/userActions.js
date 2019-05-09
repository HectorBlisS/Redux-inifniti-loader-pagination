import { login } from "../../firebase";
import axios from 'axios'

let url = 'https://rickandmortyapi.com/api/character'

// 1.- Constants
export const TYPING_CREDENTIALS = "TYPING_CREDENTIALS"
//export const GETTING_USER_DATA = "GETTING_USER_DATA"
export const SET_USER_DATA_SUCCESS = "SET_USER_DATA_SUCCESS"
export const UPDATE_USER_DATA = "UPDATE_USER_DATA"
export const REMOVE_USER_DATA = "REMOVE_USER_DATA"
// mortys
export const FETCH_USERS_LIST = "FETCH_USERS_LIST"
export const FETCH_USERS_LIST_SUCCESS = "FETCH_USERS_LIST_SUCCESS"
export const FETCH_USERS_LIST_ERROR = "FETCH_USERS_LIST_ERROR"



// 2.- Action creators

//mortys
function fetchUsersListSuccess(users) {
    return {
        type: FETCH_USERS_LIST_SUCCESS,
        payload: users
    }
}
function fetchUsersListError(error) {
    return {
        type: FETCH_USERS_LIST_ERROR,
        payload: error
    }
}
//

function removeUserDataSuccess(payload) {
    return {
        type: REMOVE_USER_DATA,
        payload
    }
}

function updateUserDataSuccess(data) {
    return {
        type: UPDATE_USER_DATA,
        payload: data
    }
}

function setUserDataSuccess(user) {
    return {
        type: SET_USER_DATA_SUCCESS,
        user
    }
}

function typingCredentialsSuccess(credentials) {
    // esto devuelve un action
    return {
        type: TYPING_CREDENTIALS,
        credentials
    }
}

// 3.- Thunks

//mortys
export let fetchUsersList = () => (dispatch, getState) => {
    let state = getState()
    if (state.users.array.length > 1) return

    return axios.get(url)
        .then(res => {
            dispatch(fetchUsersListSuccess(res.data.results))
        })
        .catch(res => {
            console.log(res)
            //dispatch(fetchUsersListError(res.response.error))
        })
}
//

export let removeUserData = () => (dispatch) => {
    // estoy hardcodeando aqui las llaves del current user SI CAMBIAN CAMBIAR AQUI
    let current = {
        name: '',
        email: '',
        bio: ''
    }
    return dispatch(removeUserDataSuccess(current))
}

export let updateUserData = (data) => (dispatch) => {
    return dispatch(updateUserDataSuccess(data))
}

export let setUserData = (email, password) => (dispatch) => {
    login(email, password)
        .then(user => dispatch(setUserDataSuccess(user)))
}

export let typingCredentials = (credentials) => (dispatch) => {
    // supongamos que aqui consumimos un api y todo salio bien!
    return dispatch(typingCredentialsSuccess(credentials))
}