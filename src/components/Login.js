import React from "react";
import {connect} from "react-redux";
import {handleAuthedUser} from "../actions/AuthedUser";

class Login extends React.Component {

    state = {
        user: '',
        id: '',
        toHome: false
    }

    onHandleChange = (itmes) => {
        const value = itmes.split(',')
        this.setState({
            user: value[0],
            id: value[1]
        })
    }

    OnSubmit = (e) => {
        e.preventDefault()
        let value = this.state.user
        let id = this.state.id
        if (value === '') {
            value = this.props.value[0].name
            id = this.props.value[0].id
        }
        this.props.dispatch(handleAuthedUser(value, id))
    
    }

    render() {
        const {value} = this.props
        return (
            <div>
                <div className="signing-container">
                    <title className="title-header">
                        <h2 className="title-welcome">Welcome to the Would You Rather App!</h2>
                        <h3 className="title-sign">Please Sign in to Continue</h3>
                    </title>
                    <div className="select-contanier">
                        <h3 className="signing-text">Sign in</h3>
                        <select className="signing-select"
                                onChange={(event) => this.onHandleChange(event.target.value)}>
                            {
                                value.map((user) => (
                                    <option key={user.id} value={[user.name, user.id]}>{user.name}</option>
                                ))
                            }
                        </select>
                        <button className="signing-button" onClick={(e) => this.OnSubmit(e)}>Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        value: Object.keys(users).map((user) => (users[user])),
        loading: Object.keys(users).length > 0,
        users
    }
}

export default connect(mapStateToProps)(Login);