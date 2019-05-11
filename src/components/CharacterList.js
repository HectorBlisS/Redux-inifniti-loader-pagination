
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onGetCharacters } from '../redux/actions/charactersActions'

function CharacterList({ onGetCharacters, characters, limit }) {

    useEffect(() => {
        onGetCharacters()
        setScrollListener()
    }, [])

    function setScrollListener() {
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                onGetCharacters()
            }
        };
    }

    function loadMore() {
        onGetCharacters()
    }

    return (
        <div>
            <ul>
                {characters.map((c, i) => <li key={i} >{c.name}</li>)}
            </ul>
            {!limit ? <button onClick={loadMore} >Cargar más</button> :
                <img src="https://www.gstatic.com/mobilesdk/170927_mobilesdk/firebase-crashlytics.png" alt="" />}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        characters: Object.values(state.characters.chars),
        limit: state.characters.count === state.characters.fetched || state.characters.next === ""
    }
}
let mapDispatchToProps = {
    onGetCharacters
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)

