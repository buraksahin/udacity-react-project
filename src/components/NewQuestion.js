import React from "react";
import {connect} from "react-redux";
import {handleSaveQuestion} from "../actions/Questions";
import {withRouter} from "react-router-dom";

class NewQuestions extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        const optionOne = this.optionOne.value
        const optionTwo = this.optionTwo.value
        const {author} = this.props
        this.props.dispatch(handleSaveQuestion(optionOne, optionTwo, author))
        this.props.history.push(`/`)
    }
    render() {
        return (
            <div className="new-container">
                <h2 className="new-title">Create New Question</h2>
                <div className="new-text">
                    <h4>Complete the questions:</h4>
                    <h3>Would you rather...</h3>
                </div>
                <div className="new-submit">
                    <input type='text' ref={(optionOne) => this.optionOne = optionOne}
                           placeholder='Enter Option One Text Here' className="new-input"/>
                    <div className="new-group">
                        <div></div>
                        <h4 className="new-or">OR</h4>
                        <div></div>
                    </div>
                    <input type='text' ref={(optionTwo) => this.optionTwo = optionTwo}
                           placeholder='Enter Option Two Text Here' className="new-input"/>
                    <button className="new-button" onClick={this.addItem}>Submit</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps({authedUser}) {
    return {
        author: authedUser ? authedUser.id : null
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestions));