import React from 'react'
import { connect } from 'react-redux'

function Users({ users, fetched }) {
    return <div>
        <h2>Lista de usuarios</h2>
        {!fetched && <img src="http://www.autopricemanager.com/img/widget-loader-lg-en.gif" />}
        <ul>
            {fetched && users.map((item, i) => <img key={i} src={item.image} />)}
        </ul>
    </div>
}

function mstp(state) {
    return {
        users: state.users.array,
        fetched: state.users.array.length > 1
    }
}

export default connect(mstp)(Users)