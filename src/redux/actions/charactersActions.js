import axios from "axios";

// 1.- const
export let GET_CHARACTERS_BEGIN = "GET_CHARACTERS_BEGIN"
export let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
export let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

// 2.- Action creator
function getCharactersBegin() {
    return {
        type: GET_CHARACTERS_BEGIN
    }
}
function getCharactersSuccess(payload) {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload
    }
}
function getCharactersError() {
    return {
        type: GET_CHARACTERS_ERROR
    }
}

// 3.- Thunks
export const onGetCharacters = () => (dispatch, getState) => {
    // cuando count === fetched return
    let next = getState().characters.next
    let alreadyHere = Object.keys(getState().characters.chars).length
    //let currentPage = getState().characters.currentPage
    // validaciones como si ya alcanzamos todos los items o si ya la pedi
    dispatch(getCharactersBegin())
    return axios
        .get(next)
        .then(res => {
            console.log(res)
            let payload = {
                chars: res.data.results,
                fetched: alreadyHere + res.data.results.length,
                prev: next,
                next: res.data.info.next,
                count: res.data.info.count,
                currentPage: next.split("=")[1] || 1
            }
            dispatch(getCharactersSuccess(payload))
        })
        .catch(e => {
            console.log(e)
            dispatch(getCharactersError()) // deberias mandar el mensaje y guardarlo en store
        })
}
