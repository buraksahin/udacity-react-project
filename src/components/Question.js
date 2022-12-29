import React from "react";
import {connect} from "react-redux";
import {handleAnsweredSaveQuestion} from "../actions/Questions";
import {withRouter} from "react-router-dom";
import { PageNotFound } from "./PageNotFound";
import NotVoted from "./NotVoted";
import VotedQuestion from "./VotedQuestion";

class Question extends React.Component {

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
        this.props.dispatch(handleAnsweredSaveQuestion({authedUser, qid, answer}))
        this.props.history.push('/')

    }

    render() {
        const {idCheck,isAnswered,id}=this.props
        return (
            <>
                {idCheck===false?(
                        <>
                            <PageNotFound style={{'color':'red'}}/>
                        </>
                    ) : (isAnswered===true?<VotedQuestion id={id}/>:<NotVoted id={id}/>)
                }
            </>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const id = props.match.params.id
    const questionId = Object.keys(questions)
    const idCheck = questionId.includes(id);
    const isAnswered = Object.keys(users[authedUser.id].answers).includes(id)
    return {
        id,
        isAnswered,
        idCheck,
        question: questions[id] ? questions[id] : null,
        user: questions[id] ? users[questions[id].author] : null,
        aid: authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(Question));