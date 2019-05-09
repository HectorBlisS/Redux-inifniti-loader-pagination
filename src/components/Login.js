import React, { Component } from 'react'
import { typingCredentials, setUserData } from '../redux/actions/userActions';
import { connect } from 'react-redux'
import { login } from '../firebase'

class Login extends Component {

    onSubmit = e => {
        e.preventDefault()
        let credentials = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        this.props.setUserData(credentials.email, credentials.password)
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <p>
                Tu Email
                <input name="email" type="text" />
            </p>
            <p>
                Tu password
                <input name="password" type="password" />
            </p>
            <button type="submit">Entrar</button>
        </form>
    }
}

function mapStateToProps(state) { // lo que HAY en store
    return {
        correElectronico: state.users.data.email,
        secret: state.users.data.password
    }
}

export default connect(mapStateToProps, {
    typingCredentials,
    setUserData
})(Login)