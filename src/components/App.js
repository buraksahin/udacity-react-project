import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import VoteApp from './VoteApp';
import Login from './Login';
import {handleInitialData} from '../actions/Shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const {loading} = this.props
    return (<Fragment>
            <LoadingBar/>
            {loading? <Login/> : <VoteApp/>}
            </Fragment>)
            }
}

function mapStateToProps({authedUser}) {
    return {
      loading: authedUser === null,
      author: authedUser ? authedUser.id : null
    }
}

export default connect(mapStateToProps)(App)