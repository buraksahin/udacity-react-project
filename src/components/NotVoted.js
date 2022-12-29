import React from "react";
import {connect} from "react-redux";
import {handleAnsweredSaveQuestion} from "../actions/Questions";
import {withRouter} from "react-router-dom";

class NotVoted extends React.Component {

    state = {
        one: '',
        two: '',

    }

    onOneChanged = (e) => {
        return this.setState({
            one: e.currentTarget.value,
            two: ''
        });
    }

    onTwoChanged = (e) => {
        return this.setState({
            two: e.currentTarget.value,
            one: ''
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {question, aid} = this.props
        const qid = question.id
        const authedUser = aid.id
        const answer = this.state.one === '' ? "optionTwo" : "optionOne"
        console.log({authedUser, qid, answer})

        this.props.dispatch(handleAnsweredSaveQuestion({authedUser, qid, answer}))
        this.props.history.push('/')

    }

    render() {
        const {question, user} = this.props
        const name = user.name
        const avatar = user.avatarURL
        const one = question.optionOne.text
        const two = question.optionTwo.text
        return (
            <div className="question-container">
                <div className="question-title">
                    <h4>{name} asks : </h4>
                </div>
                <div className="question-base">
                    <div className="question-avatar">
                        <img alt='' src={avatar}/>
                    </div>
                    <div className="question-answer">
                        <h3>Would You Rather...</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="question-radio">
                                <div>
                                    <input
                                        id="one"
                                        className="question-one"
                                        checked={this.state.one === one}
                                        onChange={this.onOneChanged}

                                        value={one} type='radio'/><label style={{'marginLeft': '1rem'}}
                                                                         id="one">{one}</label>
                                </div>
                                <div>
                                    <input
                                        id="two"
                                        className="question-two"
                                        checked={this.state.two === two}
                                        onChange={this.onTwoChanged}

                                        value={two} type='radio'/><label style={{'marginLeft': '1rem'}}
                                                                         id="two">{two}</label>
                                </div>
                            </div>
                            <button className="question-button" type="submit">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const {id} = props
    return {
        id,
        question: questions[id] ? questions[id] : null,
        user: questions[id] ? users[questions[id].author] : null,
        aid: authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(NotVoted));