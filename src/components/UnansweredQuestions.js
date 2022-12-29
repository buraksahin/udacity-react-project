import React from "react";
import {connect} from "react-redux";
import Questions from "./Questions";

class UnAnsweredQuestions extends React.Component {
    render() {
        const {values} = this.props
        return (
            <div>
                <Questions values={values}/>
            </div>
        )
    }
}
function mapStateToProps({users, authedUser, questions}) {
    return {
        values: authedUser === null
        || authedUser === undefined
            ? null : authedUser.id === null
            || authedUser.id === undefined ? null : Object.values(questions).filter(value => !Object.keys(users[authedUser.id].answers).includes(value.id))
    }
}
export default connect(mapStateToProps)(UnAnsweredQuestions);