import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {removeAuthedUser} from "../actions/AuthedUser";
import {Container} from "react-bootstrap";


class NavTab extends React.Component {
    state = {
        home: true,
        newQuestion: false,
        leaderBoard: false,
        greetings: false,
        logout: false,
        toLogout: false
    }

    style = {
        'borderBottom': '5px solid #acdcf5',
        'width': 'auto',
    }

    trueValue = {
        home: true,
        newQuestion: true,
        leaderBoard: true,
        greetings: true,
        logout: true,
    }

    changeStyle = (e, key) => {
        e.preventDefault();
        let setState = {}
        Object.entries(this.trueValue).filter(a => a[0] !== key).map((each) => (each[0])).map(eachState => {
            return setState = {
                ...setState,
                [eachState]: false,
                [key]: true
            }
        })

        this.setState(setState)
        if (key === 'logout') {
            this.props.dispatch(removeAuthedUser())
            this.setState({
                toLogout: true
            })
        }
        console.log(this.props)
    }

    render() {
        if (this.state.logout === true) {
            //  <Redirect to='/'/>
        }
        return (
            <Container>
                <ul className="nav-main">
                    <li onClick={(e) => this.changeStyle(e, 'home')}
                        style={this.state.home === true ? this.style : null} className='nav-items'>
                        <NavLink to='/' exact activeclassname='active'>
                            <div className="nav-text"> Home</div>
                        </NavLink>
                    </li>
                    <li onClick={(e) => this.changeStyle(e, 'newQuestion')}
                        style={this.state.newQuestion === true ? this.style : null} className='nav-items'>
                        <NavLink to='/add' activeclassname='active'>
                            <div className="nav-question"> New Question</div>
                        </NavLink>
                    </li>
                    <li onClick={(e) => this.changeStyle(e, 'leaderBoard')}
                        style={this.state.leaderBoard === true ? this.style : null} className='nav-items'>
                        <NavLink to='/leaderboard' activeclassname='active'>
                            <div className="nav-question"> Leader Board</div>
                        </NavLink>
                    </li>
                    <li>
                        <div>
                            <div className="nav-greetings"> Hello, {this.props.user}<img
                                style={{'width': '32px', 'marginLeft': '1rem'}} alt="" src={this.props.avatar}/></div>
                        </div>
                    </li>
                    <li onClick={(e) => this.changeStyle(e, 'logout')}
                        style={this.state.logout === true ? this.style : null} className='nav-items'>
                        Logout
                    </li>
                </ul>
            </Container>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        user: authedUser === null || authedUser === undefined ? null : authedUser.author,
        avatar: authedUser === null || authedUser === undefined ? null : authedUser.id === null || authedUser.id === undefined ? null : users[authedUser.id].avatarURL,
        author: authedUser
    }

}

export default connect(mapStateToProps)(NavTab);
