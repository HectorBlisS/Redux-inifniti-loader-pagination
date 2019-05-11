import axios from "axios";

// 1.- const
export let GET_CHARACTERS_BEGIN = "GET_CHARACTERS_BEGIN"
export let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
export let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"
export let CHARACTERS_LIMIT_REACHED = "CHARACTERS_LIMIT_REACHED"
export let GET_SPECIFIC_PAGE_SUCCESS = "GET_SPECIFIC_PAGE_SUCCESS"

// 2.- Action creator
function getSpecificPageSuccess(payload) {
    return {
        type: GET_SPECIFIC_PAGE_SUCCESS,
        payload
    }
}


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

function charactersLimitReached() {
    return {
        type: CHARACTERS_LIMIT_REACHED
    }
}

// 3.- Thunks
export const getSpecificPage = (pageNumber) => (dispatch, getState) => {
    let { next, pages } = getState().characters
    // 1.- si la pagina ya la tengo ??
    if (pages[`page${pageNumber}`]) return
    // 2.- si no la tengo ??
    let alreadyHere = Object.keys(getState().characters.chars).length
    next = next.split("=")[0] + "=" + pageNumber
    dispatch(getCharactersBegin())
    return axios
        .get(next)
        .then(res => {
            console.log(res)
            let payload = {
                pages: res.data.info.pages,
                chars: res.data.results,
                fetched: alreadyHere + res.data.results.length,
                prev: next,
                next: res.data.info.next,
                count: res.data.info.count,
                currentPage: next.split("=")[1] || 1 //
            }
            dispatch(getCharactersSuccess(payload))
        })
        .catch(e => {
            console.log(e)
            dispatch(getCharactersError()) // deberias mandar el mensaje y guardarlo en store
        })


}

export const onGetCharacters = () => (dispatch, getState) => {
    let { count, fetched } = getState().characters
    if (count === fetched) return dispatch(charactersLimitReached()) // ya no hay más personajes
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
                pages: res.data.info.pages,
                chars: res.data.results,
                fetched: alreadyHere + res.data.results.length,
                prev: next,
                next: res.data.info.next,
                count: res.data.info.count,
                currentPage: next.split("=")[1] || 1 //
            }
            dispatch(getCharactersSuccess(payload))
        })
        .catch(e => {
            console.log(e)
            dispatch(getCharactersError()) // deberias mandar el mensaje y guardarlo en store
        })
}
