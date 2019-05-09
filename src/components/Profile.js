import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUserData, removeUserData } from '../redux/actions/userActions'

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            editing: false
        }
    }

    onChange = e => {
        let user = {
            name: this.props.name,
            email: this.props.email,
            bio: this.props.bio
        }
        user[e.target.name] = e.target.value
        this.props.updateUserData(user)
    }

    render() {
        let { editing } = this.state
        let { name, email, bio } = this.props
        return (<div>
            <section>
                <h2>Fotito</h2>
            </section>
            {!editing ? <section>
                <h2>{name}</h2>
                <h3>{email}</h3>
                <p>{bio}</p>
                <button onClick={() => this.setState({ editing: true })} >Editar</button>
            </section> :
                <section>
                    <h2>Tus datos</h2>
                    <form>
                        <p>
                            Tu nombre
                        <input onChange={this.onChange} value={name} name="name" type="text" />
                        </p>
                        <p>
                            Tu Email
                        <input onChange={this.onChange} value={email} name="email" type="text" />
                        </p>
                        <p>
                            Tu Bio
                        <input onChange={this.onChange} value={bio} name="bio" type="text" />
                        </p>
                    </form>
                    <button onClick={() => this.setState({ editing: false })} >Guardar</button>
                    <button onClick={() => this.props.removeUserData()} >Volarlo todo alv</button>
                </section>}
            <section>
                <h2>Feed</h2>
            </section>
        </div>)
    }
}

function mapStateToProps(state) {
    let { current } = state.users
    return {
        name: state.users.current.name,
        email: state.users.current.email,
        bio: current.bio
    }
}

let actions = {
    updateUserData,
    removeUserData
}

export default connect(mapStateToProps, actions)(Profile)